// implement your API here

const express = require('express');
const cors = require('cors');
const dataBase = require('./data/db.js');


const server = express();

server.use(express.json());
server.use(cors())

// Testing of workability of the server
server.get('/', (req, res) => {
    res.send('hello world');
})

// POST user info to database
server.post('/api/users', (req, res) => {
    const dbData = req.body;
    console.log('dataBase', dbData)

        if (!dbData.name || !dbData.bio) {
            res.status(400).json({ errorMessage: "Please provide name and bio for the user." })
        } else {
            
            dataBase.insert(dbData)
            .then(user => {
                res.status(201).json(user); 
            })
            .catch(error => {
                res.status(500).json({ error: "There was an error while saving the user to the database" })
            }); 
        }

})
//  Can send json like { "name": "some name", "bio": "some bio" }


// GET ALL users from database
server.get('/api/users', (req, res) => {

    dataBase.find()
    .then(users => {
        res.send(users);
    })
    .catch(error => {
        res.status(500).send({ error: "The users information could not be retrieved." })
    });

});

// GET user by ID from database
server.get('/api/users/:id', (req, res) => {

    const id = req.params.id;
    console.log("ID of requested user: ", id)


    dataBase.findById(id)
    // console.log(dataBase.findById(id))
    .then(user => {
        if(user) {
            res.json(user);
        } else {
            res.status(404).json({ message: "The user with the specified ID does not exist." })
        }
    })
    .catch(error => {
        res.status(500).json({ error: "The user information could not be retrieved." })
    });
});

// DELETE user by ID from database
server.delete('/api/users/:id', (req, res) => {

    const id = req.params.id;
    console.log("ID of requested user for delete: ", id)

    dataBase.remove(id)
    .then(user => {
        if(user) {
            res.json(user);
        } else {
            res.status(404).json({ message: "The user with the specified ID does not exist." })
        }
    })
    .catch(error => {
        res.status(500).json({ error: "The user could not be removed" })
    });

});

// PUT user by ID from database
server.put('/api/users/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    dataBase.update(id, changes)
    .then(user => {
        if(user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "The user with the specified ID does not exist." })
        }
    })
    .catch(error => {
        res.status(500).json({ error: "The user information could not be modified." })
    });
})

const port = 8000;
server.listen(port, () => console.log(`\n** API on port ${port} is working **\n`))