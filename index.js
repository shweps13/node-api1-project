// implement your API here

const express = require('express');
const dataBase = require('./data/db.js');


const server = express();

server.use(express.json());

// Testing of workability of the server
server.get('/', (req, res) => {
    res.send('hello world');
})

// POST user info to database
server.post('/api/users', (req, res) => {
    const dbData = req.body;
    console.log('hubData', dbData)

    dataBase.insert(dbData)
        .then(user => {
            res.json(user); 
        })
        .catch(error => {
            res.json({message: `error saving the user ${error}`})
        });  
})
//  Can send json like { "name": "some name", "bio": "some bio" }


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
    .then(user => {

        res.send(user);
    }).catch(error => {
        res.send(error)
    });

});

// DELETE user by ID from database
server.delete('/api/users/:id', (req, res) => {

    const id = req.params.id;
    console.log("ID of requested user for delete: ", id)

    dataBase.remove(id)
    .then(user => {
        res.json(user);
    }).catch(error => {
        res.json(error)
    });

});


const port = 8000;
server.listen(port, () => console.log(`\n** API on port ${port} is working **\n`))