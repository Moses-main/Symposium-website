const Registration = require("../models/registrationModel");

exports.getAdminPage = (req, res) => {
  Registration.find()
    .then((registrations) => {
      res.render("adminDashboard", { registrations });
    })
    .catch((err) => console.error("Error fetching registrations:", err));
};

// retrieve data from the database
// module.exports = async (req, res) => {
//   const blogposts = await BlogPost.findById(req.params.id);
//   console.log(blogposts);
//   res.render("post", {
//     blogposts,
//   });
// };
