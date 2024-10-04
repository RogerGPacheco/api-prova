const DeckRepository = require('../repositories/deckRepository');
const containsSpecialCharacters = require('../utils/validation')

class deckService{
    async getDecks(){
        return DeckRepository.findAll();
    }

    async createDeck(Deck){
        if(Deck.deckName || Deck.deckDescription != text){
            throw new Error('Texto em branco.')
        }

        if(Deck.deckName.lenght > 60){
            throw new Error('Nome do deck muito longo.')
        }

        if(Deck.deckDescription.lenght < 30){
            throw new Error('Descrição muito curta.')
        }
        if(Deck.deckDescription.lenght > 300){
            throw new Error('Descrição muito longa')
        }

        if(containsSpecialCharacters(text)){
            throw new Error('O texto contem caracter especial');
        }

        return deckRepository.createdeck({text});
    }
}

module.exports = new deckService();