// routes/homeRoutes.js
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

// Tampilkan halaman home
router.get('/', homeController.showHomePage);

module.exports = router;
