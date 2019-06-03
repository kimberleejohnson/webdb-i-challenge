const express = require('express');

const server = express();

server.use(express.json()); 

// Calling in my data 
const Accounts = require('./data/accounts-model.js'); 

// POST (C IN CRUD)
server.post('/', async (req, res) => {
    try {
        const newAccount = await Accounts.add(req.body); 
        res.status(200).json(newAccount); 
    } catch (error) {
        console.log(error); 
        res.status(500).json({message: "Slow down, partner! Error adding the account."})
    }
})

// GET (R IN CRUD)
server.get('/', async (req, res) => {
    try {
        const accounts = await Accounts.find(); 
        res.status(200).json(accounts); 
    } catch (error) {
        console.log(error); 
        res.status(500).json({message: "Whoopsie daisy! Error retrieving the accounts."})
    }
})

// PUT (U IN CRUD)

// DELETE (D IN CRUD)

module.exports = server;