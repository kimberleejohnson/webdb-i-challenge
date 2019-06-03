const express = require('express');

const server = express();

// Calling in my data 
const Accounts = require('./data/accounts-model.js'); 

// POST (C IN CRUD)

// GET (R IN CRUD)
server.get('/', async (req, res) => {
    try {
        const accounts = await Accounts.find(); 
        res.status(200).json(accounts); 
    } catch (error) {
        console.log(error); 
        res.status(500).json({message: "Whoopsie daisy! Error adding the project."})
    }
})

// PUT (U IN CRUD)

// DELETE (D IN CRUD)

module.exports = server;