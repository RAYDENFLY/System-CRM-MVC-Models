// middlewares/errorHandlers.js
function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Terjadi kesalahan dalam server.');
  }
  
  module.exports = errorHandler;
  