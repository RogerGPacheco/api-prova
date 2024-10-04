const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const deck = sequelize.define('decks', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },

    idUser: {
            type: DataTypes.STRING,
            allowNull: false
    },

    deckName: {
        type: DataTypes.STRING,
        allowNull: false
    },

    deckDescription: {
        type: DataTypes.STRING,
        allowNull:false
    }
})

module.exports = deck;