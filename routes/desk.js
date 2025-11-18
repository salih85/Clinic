
const express = require('express');
const router = express.Router();
const patientController = require('../controllers/desk');

router.get('/add-patient', patientController.Addpatient);

router.post('/patients/add', patientController.createPatient);

router.post('/patients', patientController.listpatients);

module.exports = router;
