const { Client } = require('pg');

const client = new Client({
    user: 'andypham',
    host: 'localhost',
    database: 'webdash',
    password: 'password',
    port: 5432
});

client.connect();

module.exports = client;
