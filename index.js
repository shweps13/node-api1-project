// implement your API here

const express = require('express');
const dataBase = require('./data/db.js');


const server = express();

server.use(express.json());

// Testing of workability of the server
server.get('/', (req, res) => {
    res.send('hello world');
})

// GET ALL users from database
server.get('/api/users', (req, res) => {

    dataBase.find()
    .then(users => {
        res.send(users);
    }).catch(error => {
        res.send(error)
    });

});

// GET user by ID from database
server.get('/api/users/:id', (req, res) => {

    const id = req.params.id;
    console.log("ID of requested user: ", id)

    dataBase.findById(id)
    .then(users => {

        res.send(users);
    }).catch(error => {
        res.send(error)
    });

});

const port = 8000;
server.listen(port, () => console.log(`\n** API on port ${port} is working **\n`))