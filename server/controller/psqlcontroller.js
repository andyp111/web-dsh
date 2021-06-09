const client = require('../database/postgresql.js');
const hash = require('../hashPassword.js');
const uuid = require('uuid/v4');

module.exports = {
    //erik will create a select all query for posts

    getUserInfo: (req, res) => {
        let q = `select * from userinfo`;
        client.query(q)
            .then((result) => {
                console.log(result.rows);
                res.status(200).send(result.rows);
            })
            .catch((error) => {
                res.status(400).send(error);
            })
    },

    userSignUp: (req, res) => {
        const { username, password, email, level } = req.body;
        console.log(req.body)
        let hashed = hash.hashPassword(password);
        let q = `insert into userinfo (username, hashedpassword, email, userlevel) 
            values ('${username}', '${hashed}', '${email}', '${level}')`;
        let checkq = `select username from userinfo where username='${username}'`;
        client.query(checkq)
            .then((result) => {
                if (result.rows.length > 0) throw new Error;
                else {
                    client.query(q)
                        .then((result) => {
                            res.status(200).send('inserted')
                        })
                }
            })
            .catch((error) => {
                res.status(400).send(error);
            })
    },

    userLogIn: (req, res) => {
        const { username, password } = req.body;
        const hashed = hash.hashPassword(password);
        let q = `select hashedpassword from userinfo where username='${username}'`;
        client.query(q)
            .then((result) => {
                let storedPass = result.rows[0].hashedpassword;
                const id = uuid();
                console.log('id', id);
                const hashedId = hash.hashId(id);
                console.log('hashed', hashedId);
                if (hashed !== storedPass) throw new Error;
                else {
                    let updateq = `update userinfo set sessionid = '${hashedId}' where username = '${username}'`;
                    client.query(updateq)
                        .then((result) => {
                            res.cookie('id', `${id}`, { maxAge: 3600000 }).send(id);
                        })
                }
            })
            .catch((error) => {
                res.status(400).send(error)
            })

    }
}