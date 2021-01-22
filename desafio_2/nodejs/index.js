const express = require('express');
const app = express();
const port = 3000;
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};

const mysql = require('mysql');
let connection;

const sql = `INSERT INTO people(name) VALUES ('Allan')`
connect();
connection.query(sql);
connection.end();

function connect() {
     if (!connection || connection.state === 'disconnected') {
        connection = mysql.createConnection(config);
     }     
}

app.get('/', (req,res) => {
    connect();
    connection.query('SELECT name FROM people', (err,rows) => {
        res.send(`nome ${rows[0].name}`);          
    });      
    connection.end();
});

app.listen(port, () => {
    console.log('rodouuu ', port);
});