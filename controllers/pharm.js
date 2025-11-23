
const Consultation = require("../models/Consultation");

exports.home =(req,res)=>{
    res.render('pharm/home')
}

exports.listConsultations = async (req, res) => {
    const consultations = await Consultation.find({ prescription: { $ne: "" } }) .sort({ date: -1 });
    res.render("pharm/consultations", { consultations });
};

exports.viewConsultation = async (req, res) => {
    const consultation = await Consultation.findById(req.params.id);
    res.render("pharm/view-consultation", { consultation });
};

exports.updateConsultation = async (req, res) => {
    const { amount } = req.body;

    await Consultation.findByIdAndUpdate(req.params.id, {
        prescriptionPurchased: true,
        prescriptionAmount: amount
    });

    res.redirect("/pharm/consultations");
};
