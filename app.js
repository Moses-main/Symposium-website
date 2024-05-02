const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const registrationRoutes = require("./routes/registrationRoutes");
const NavigationRoutes = require("./routes/NavigationRoutes");
const adminRoutes = require("./routes/adminRoutes");
const dotenv = require("dotenv");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
dotenv.config();

// Setting
app.set("view engine", "ejs");

// Database connection
MONGO_CONNECTION = process.env.MONGO_URI;
mongoose
  .connect(
    MONGO_CONNECTION
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB", err));

// Routes
app.use("/reg", registrationRoutes);
app.use("/admin", adminRoutes);
app.use("/", NavigationRoutes);

// Homepage route
app.get("/", (req, res) => {
  res.render("index");
});

// About page route
app.get("/about", (req, res) => {
  res.render("about");
});

// Contact page route
app.get("/contact", (req, res) => {
  res.render("contact");
});

// Server listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
