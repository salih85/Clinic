const express = require("express");
const router = express.Router();
const pharmacyController = require("../controllers/pharm");

router.get("/", pharmacyController.home);

router.get("/consultations", pharmacyController.listConsultations);

router.get("/consultations/:id", pharmacyController.viewConsultation);

router.post("/consultations/update/:id", pharmacyController.updateConsultation);

module.exports = router;

