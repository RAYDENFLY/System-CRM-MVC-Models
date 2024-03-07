// models/userModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false // Menonaktifkan kolom createdAt dan updatedAt
});

module.exports = User;
