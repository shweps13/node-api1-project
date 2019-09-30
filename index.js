// implement your API here

const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('hello world');
})

const port = 8000;
server.listen(port, () => console.log(`\n** API on port ${port} is working **\n`))