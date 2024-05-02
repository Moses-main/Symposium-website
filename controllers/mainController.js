const express = require("express");
const router = express.Router();

exports.home = (req, res) => {
  res.render("index");
};

exports.about = (req, res) => {
  res.render("about");
};

exports.speakers = (req, res) => {
  res.render("speakers");
};

exports.agenda = (req, res) => {
  res.render("agenda");
};

exports.contact = (req, res) => {
  res.render("contact");
};

exports.register = (req, res) => {
  res.render("registerForm");
};

exports.admin = (req, res) => {
  res.render("adminDashboard");
};
