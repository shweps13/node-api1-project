// implement your API here

const express = require('express');
const dataBase = require('./data/db.js');


const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('hello world');
})

server.get('/api/users', (req, res) => {

    dataBase.find()
    .then(users => {

        res.send(users);
    }).catch(error => {
        res.send(error)
    });

});


const port = 8000;
server.listen(port, () => console.log(`\n** API on port ${port} is working **\n`))