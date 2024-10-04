const express = require('express');
const deckService = require('../services/deckService');
const authenticateToken = require('../middleware/auth');

const router = express.Router();

router.post('/register', authenticateToken, async(req, res) =>{
    try{
        const { deckName, deckDescription } = req.body;
        const Deck = deckService.createDeck({ deckName, deckDescription });
        res.json(Deck);
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
})

router.get('/deck', async(req, res) =>{
    try{
        const deck = await deckService.getCards();
        res.json(deck);
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
})

module.exports = router;