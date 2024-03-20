// models/customerModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Customer = sequelize.define('Customer', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    updatedAt: 'updatedAt' // Nama kolom updatedAt
});

// Menambahkan fungsi getAllCustomers ke model
Customer.getAllCustomers = async () => {
    try {
        const customers = await Customer.findAll();
        return customers;
    } catch (error) {
        console.error('Error fetching customers:', error);
        return [];
    }
};

module.exports = Customer;
