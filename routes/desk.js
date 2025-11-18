const express = require('express');
const router = express.Router();

const desk = require('../controllers/desk');

router.get('/', (req, res) => {
    res.redirect('/desk/patients');
});

router.get('/add-patient', desk.Addpatient);
router.post('/patients/add', desk.createPatient);
router.get('/patients', desk.listpatients);

router.get('/add-doctor', desk.AddDoctor);
router.post('/doctors/add', desk.createDoctor);
router.get('/doctors', desk.listDoctors);

module.exports = router;


