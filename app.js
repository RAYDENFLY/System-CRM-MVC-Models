// app.js
const express = require('express');
const bodyParser = require('body-parser')

const errorHandler = require('./middlewares/errorHandlers')
const customerRoutes = require('./routes/customerRoutes');
const opportunityRoutes = require('./routes/opportunityRoutes');
const authRoutes = require('./routes/authRoutes')
const homeRoutes = require('./routes/homeRoutes');
const dashboardRoutes = require('./routes/dahsboardRoutes');
const { dashboard_get } = require('./controllers/dashboardContoller');
const app = express();
const port = 4500;

// Middleware untuk parsing JSON
app.use(express.json());
// Set EJS sebagai template engine
app.set('view engine', 'ejs');

// Middleware untuk parsing body request
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware penanganan kesalahan
app.use(errorHandler);

// Gunakan routes
app.use('/', homeRoutes)
app.use('/auth', authRoutes);
app.use('/customers', customerRoutes);
app.use('/opportunities', opportunityRoutes);
app.use('/dashboard', dashboardRoutes)

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
