const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor');

exports.Addpatient = (req, res) => {
    res.render('desk/add-patient');
};

exports.createPatient = async (req, res) => {
    try {
        const { name, phone, age, gender, bloodGroup, address, lastVisit } = req.body;

        await Patient.create({
            id: `P${Date.now()}`,
            name,
            phone,
            age,
            gender,
            bloodGroup,
            address,
            lastVisit,
            createdAt: new Date()
        });

        res.redirect('/desk/patients');
    } catch (err) {
        console.log(err);
        res.redirect("/");
    }
};

exports.listpatients = async (req, res) => {
    try {
        const patients = await Patient.find();
        res.render('desk/patients', { patients });
    } catch (err) {
        console.log(err);
    }
};

exports.AddDoctor = (req, res) => {
    res.render('desk/add-doctor');
};


exports.createDoctor = async (req, res) => {
    try {
        const { name, specialization, phone, experience } = req.body;

        await Doctor.create({
            id: `D${Date.now()}`,
            name,
            specialization,
            phone,
            experience,
            available: false
        });

        res.redirect('/desk/doctors');
    } catch (err) {
        console.log(err);
        res.redirect("/desk/add-doctor");
    }
};

exports.listDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.render('desk/doctors', { doctors });
    } catch (err) {
        console.log(err);
    }
};
