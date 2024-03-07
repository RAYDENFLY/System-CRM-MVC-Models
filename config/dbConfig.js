// config/dbConfig.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('crm_database', 'systemcrm', 'mngcrm123', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => {
    console.log('Connected to MySQL database');
  })
  .catch((error) => {
    console.error('Error connecting to database:', error);
  });

module.exports = sequelize;
