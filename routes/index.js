var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home" });
});

router.get("/services/1", function (req, res, next) {
  res.render("services-1", { title: "Services" });
});

router.get("/services/2", function (req, res, next) {
  res.render("services-2", { title: "Services" });
});

router.get("/services/3", function (req, res, next) {
  res.render("services-3", { title: "Services" });
});

router.get("/about-us", function (req, res, next) {
  res.render("about-us", { title: "About Us" });
});

router.get("/process", function (req, res, next) {
  res.render("process", { title: "Process" });
});

router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "Contact" });
});

router.get("/faq", function (req, res, next) {
  res.render("faq", { title: "Frequently Asked Questions" });
});

router.get("/comingsoon", function (req, res, next) {
  res.render("coming-soon", { title: "Coming Soon" });
});

//Azerbaijani

router.get("/az", function (req, res, next) {
  res.render("az/index", { title: "Home" });
});

module.exports = router;
