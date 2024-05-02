const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");
const registerController = require("../controllers/registrationController");

router.get("/", mainController.home);
router.get("/about", mainController.about);
router.get("/contact", mainController.contact);
router.get("/speakers", mainController.speakers);
router.get("/agenda", mainController.agenda);

// implement these ones
router.get("/", mainController.register);
router.post("/create", registerController.createIndividual);
router.get("/Admins");

module.exports = router;
