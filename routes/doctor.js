const express = require('express');
const router = express.Router();
const { isLoggedin, isDoctor } = require('../middlewares/auth');
const doctorController = require('../controllers/doctor');

router.get('/', isLoggedin, isDoctor, doctorController.home);

router.get('/patients', isLoggedin, isDoctor, doctorController.patientList);

router.get('/consultation/add/:id', isLoggedin, isDoctor, doctorController.addConsultationPage);

router.post('/consultation/add/:id', isLoggedin, isDoctor, doctorController.addConsultation);

router.get('/consultation', isLoggedin, isDoctor, doctorController.consultationList);

router.get('/consultation/view/:id', isLoggedin, isDoctor, doctorController.viewConsultation);

module.exports = router;

