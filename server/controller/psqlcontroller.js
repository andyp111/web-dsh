const client = require('../database/postgresql.js');
const hashPassword = require('../hashPassword.js');


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
        let hashed = hashPassword(password);
        let q = `insert into userinfo (username, hashedpassword, email, userlevel) 
            values ('${username}', '${hashed}', '${email}', '${level}')`;
        
        client.query(q)
            .then((result) => {
                console.log('hello')
                console.log(result);
                res.status(200).send('inserted');
            })
            .catch((error) => {
                console.log('fail');
                res.status(400).send(error);
            })
    }
}