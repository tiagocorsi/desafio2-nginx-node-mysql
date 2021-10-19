const express = require('express');
const app = express();
const mysql = require('mysql');
const port = 3000;
const config = {
    host: 'dbserver',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const pool = mysql.createPool(config);

var table = '';

app.get('/', (req, res) => {
    res.write('<h1>Full Cycle Rocks!</h1>');

    pool.getConnection((err, connection) => {
        if (err) throw err;

        table = '<table border="1"><tr><th>ID</th><th>Nome</th></tr>';

        connection.query(`INSERT INTO people(name) values ('Tiago')`, (err, rows, fields) => {
            if (err) throw err;
        });

        connection.query(`SELECT id, name FROM people`, (err, rows, fields) => {
            connection.release();
            if (err) throw err;

            for (var i = 0; i < rows.length; i++) {
                table += '<tr><td>' + rows[i].id + '</td><td>' + rows[i].name + '</td></tr>';
            }

            table += '</table>';
            res.write(table);
            res.end();
        });
    });
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
});