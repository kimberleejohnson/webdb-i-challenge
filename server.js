const express = require('express');

const server = express();

// Installing global middleware that lets this express code *use* json
// Required 
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
        const accounts = await Accounts.findById(); 
        res.status(200).json(accounts); 
    } catch (error) {
        console.log(error); 
        res.status(500).json({message: "Whoopsie daisy! Error retrieving the accounts."})
    }
})

server.get('/:id', async (req, res) => {
    try {
        const account = await Accounts.findById(req.params.id); 
        res.status(200).json(account); 
    } catch (error) {
        console.log(error); 
        res.status(500).json({message: "Whoopsie daisy! Error retrieving the account."})
    }
})

// PUT (U IN CRUD)
server.put('/:id', async (req, res) => {
    try {
        res.status(200).json(await Accounts.update(req.params.id, req.body));
    } catch (error) {
        console.log(error); 
        res.status(500).json({message: "Whoopsies! Problem updating the account"})
    }
});

// DELETE (D IN CRUD)
server.delete('/:id', async (req, res) => {
    try {
        res.status(200).json(await Accounts.remove(req.params.id)); 
    } catch (error) {
        console.log(error); 
        res.status(500).json({message: "Easy cowboy! There's an error removing the account."})
    }
}); 

module.exports = server;