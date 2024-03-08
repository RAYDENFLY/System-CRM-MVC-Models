const Customer = require('../models/customerModel');
const Opportunity = require('../models/opportunityModel');
const User = require('../models/userModel');
const { Op } = require('sequelize');

// Function to get new customers
const getNewCustomers = async () => {
    try {
        const newCustomers = await Customer.findAll({ 
            where: { 
                createdAt: { 
                    [Op.gt]: new Date(Date.now() - 24 * 60 * 60 * 1000) 
                } 
            } 
        });
        return newCustomers;
    } catch (error) {
        console.error('Error fetching new customers:', error);
        return [];
    }
};

// Function to get new opportunities
const getNewOpportunities = async () => {
    try {
        const newOpportunities = await Opportunity.findAll({ 
            where: { 
                createdAt: { 
                    [Op.gt]: new Date(Date.now() - 24 * 60 * 60 * 1000) 
                } 
            } 
        });
        return newOpportunities;
    } catch (error) {
        console.error('Error fetching new opportunities:', error);
        return [];
    }
};

const getUser = async (req) => {
    try {
        const userId = req.session.userId; // Assuming you store the user ID in the session
        const user = await User.findByPk(userId);
        return user;
    } catch (error) {
        console.error('Error fetching user:', error);
        return null;
    }
};

exports.dashboard_get = async (req, res) => {
    try {
        const customers = await Customer.findAll();
        const opportunities = await Opportunity.findAll();
        const newCustomers = await getNewCustomers();
        const newOpportunities = await getNewOpportunities();
        const user = await getUser(req); // Pass the request object to getUser function

        res.render('auth/dashboard/home', { customers, opportunities, newCustomers, newOpportunities, user });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
};
