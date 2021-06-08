const client = require('../database/postgresql.js');

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
}