// controllers/authController.js
const User = require('../models/userModel');

// Tampilkan halaman login
exports.login_get = (req, res) => {
    res.render('auth/login'); // Ganti 'login' dengan nama file tampilan login Anda
}

// Proses login
exports.login_post = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Cari pengguna dengan kredensial yang diberikan
        const user = await User.findOne({ where: { username: username } });

        if (!user || user.password !== password) {
            // Kredensial tidak valid, arahkan kembali ke halaman login
            res.redirect('/login');
        } else {
            // Kredensial valid, simpan ID pengguna dalam session
            req.session.userId = user.id;
            // Arahkan ke halaman dashboard atau halaman lain yang sesuai
            res.redirect('/dashboard');
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).send('Internal Server Error');
    }
}
