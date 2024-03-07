// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Tampilkan halaman login
router.get('/login', authController.login_get);

// Proses login
router.post('/login', authController.login_post);

module.exports = router;
