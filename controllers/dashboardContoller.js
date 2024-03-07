// controllers/dashboardController.js
const Customer = require('../models/customerModel');
const Opportunity = require('../models/opportunityModel');

exports.dashboard_get = async (req, res) => {
    try {
        // Logic to fetch data for dashboard
        const customers = await Customer.findAll();
        const opportunities = await Opportunity.findAll();

        res.render('auth/dashboard/home', { customers, opportunities });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
};
