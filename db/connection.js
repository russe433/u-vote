const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 't3xtesFr0mme3x3s',
    database: 'election'
});

module.exports = db;