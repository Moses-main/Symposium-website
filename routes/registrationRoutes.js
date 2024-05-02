const express = require("express");
const router = express.Router();
// const mongoose = require("mongoose");
// const Registration = require("../models/registrationModel");
const registrationController = require("../controllers/registrationController");

router.get("/", registrationController.getRegistrationPage);
// router.post("/register", registrationController.postRegistrationForm);
router.post("/new", registrationController.createIndividual);

router.get("/all", registrationController.getAllParticipants);
module.exports = router;
