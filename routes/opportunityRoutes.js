// routes/opportunityRoutes.js
const express = require('express');
const router = express.Router();
const opportunityController = require('../controllers/opportunityController');

router.get('/', opportunityController.getOpportunities);

module.exports = router;
