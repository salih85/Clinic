const Patient = require('../models/Patient');
const Consultation = require('../models/Consultation');
const Doctor = require("../models/Doctor");

exports.home = (req, res) => {
    const doctorName = req.user && req.user.name ? req.user.name : 'Doctor';
    res.render('doctor/home', { 
        doctorName: doctorName 
    });
};

exports.patientList = async (req, res) => {
    const patients = await Patient.find();
    res.render('doctor/patient-list', { patients });
};

exports.addConsultationPage = async (req, res) => {
    const patient = await Patient.findById(req.params.id);
    res.render('doctor/consultation-add', { patient });
};

exports.addConsultation = async (req, res) => {
    await Consultation.create({
        patient: req.body.patientName, 
        topic: req.body.problem, 
        prescription: req.body.prescription || req.body.medication || '', 
        status: req.body.status
    });

    res.redirect('/doctor/consultation');
};


exports.consultationList = async (req, res) => {
    const consultations = await Consultation.find(); 
    res.render('doctor/consultation', { consultations });
};

exports.viewConsultation = async (req, res) => {
    const consultation = await Consultation.findById(req.params.id); 
    res.render('doctor/consultation-view', { consultation });
};