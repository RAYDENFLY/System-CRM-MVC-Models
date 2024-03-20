// routes/customerRoutes.js
const express = require('express');
const router = express.Router();
const customersController = require('../controllers/customerController');
const requireLogin = require('../controllers/authController').requireLogin;

// Middleware untuk memeriksa apakah pengguna telah login
router.use(requireLogin);

// Rute untuk menampilkan halaman daftar pelanggan
router.get('/', customersController.customers_get);
router.get('/edit/:id', customersController.customer_edit_get);
router.post('/edit/:id', customersController.customer_edit_post);
router.get('/delete/:id', customersController.customer_delete_get);
router.post('/delete/:id', customersController.customer_delete_post);
router.delete('/delete/:id', customersController.customer_delete);

// Rute untuk menampilkan halaman tambah pelanggan
router.get('/add', customersController.customer_add_get);

// Rute untuk menambahkan pelanggan baru
router.post('/add', customersController.customer_add_post);

module.exports = router;
