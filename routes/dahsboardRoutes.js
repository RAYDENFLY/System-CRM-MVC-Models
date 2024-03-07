// routes/dashboardRoutes.js
const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardContoller');

router.get('/', dashboardController.dashboard_get);

module.exports = router;
