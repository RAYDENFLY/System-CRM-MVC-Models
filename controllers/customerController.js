// controllers/customerController.js
const customerModel = require('../models/customerModel');

function getCustomers(req, res) {
  customerModel.getAllCustomers((err, customers) => {
    if (err) {
      return res.status(500).json({ error: 'Gagal mengambil data pelanggan' });
    }
    res.json(customers);
  });
}

module.exports = {
  getCustomers
};
