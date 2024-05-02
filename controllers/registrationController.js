const Registration = require("../models/registrationModel");

exports.getRegistrationPage = (req, res) => {
  res.render("registerForm");
};

exports.createIndividual = async (req, res) => {
  try {
    const {
      name,
      email,
      contact,
      institution,
      position,
      registrationType,
      comments,
    } = req.body;

    // Validate required fields
    if (!name || !contact || !institution || !position || !registrationType) {
      return res
        .status(400)
        .json({ message: "All required fields must be provided" });
    }

    // Check if email is provided and valid
    if (email && !isValidEmail(email)) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    // Create a new registration document
    const registration = new Registration({
      name,
      email,
      contact,
      institution,
      position,
      registrationType,
      comments,
    });

    // Save the registration to the database
    const newRegistration = await registration.save();
    return res.redirect("/admin");
    // res.status(201).json(newRegistration);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Function to validate email format
function isValidEmail(email) {
  // Regular expression for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// enpoint to return the whole participants list
exports.getAllParticipants = async (req, res) => {
  const participants = await Registration.find();
  return res.status(200).json({ participants: participants });
  // return res.status(200).json({ participants: participants });
};
0;
