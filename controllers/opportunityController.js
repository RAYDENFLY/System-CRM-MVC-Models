// controllers/opportunityController.js
const opportunityModel = require('../models/opportunityModel');

function getOpportunities(req, res) {
  opportunityModel.getAllOpportunities((err, opportunities) => {
    if (err) {
      return res.status(500).json({ error: 'Gagal mengambil data kesempatan' });
    }
    res.json(opportunities);
  });
}

module.exports = {
  getOpportunities
};
