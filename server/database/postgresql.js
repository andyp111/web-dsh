const { Client } = require('pg');

const client = new Client({
    user: 'theo',
    host: 'localhost',
    database: 'webdash',
    password: '',
    port: 5432
});

client.connect();

module.exports = client;
