const express = require('express');
const router = express.Router();
const employeeRoutes = require('./modules/employees/routes');

router.use('/employee', employeeRoutes);

module.exports = router;