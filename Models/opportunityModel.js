// models/Opportunity.js
const { DataTypes } = require('sequelize');
const db = require('../config/dbConfig');

const Opportunity = db.define('Opportunity', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true
    },
    stage: {
        type: DataTypes.ENUM('Prospect', 'Qualified', 'Negotiation', 'Closed Won', 'Closed Lost'),
        allowNull: true
    },
    close_date: {
        type: DataTypes.DATE,
        allowNull: true
    }
});

module.exports = Opportunity;
