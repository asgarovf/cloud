var express = require("express");
const { request } = require("../app");
var router = express.Router();
const getTranslationData = require("../utils/getTranslationData");

/* GET home page. */

router.get("/", function (req, res, next) {
  const tData = getTranslationData(req);
  res.render("index", { title: "Home", tData: tData });
});

router.get("/services/1", function (req, res, next) {
  const tData = getTranslationData(req);
  res.render("services-1", { title: "Services", tData: tData });
});

router.get("/services/2", function (req, res, next) {
  const tData = getTranslationData(req);
  res.render("services-2", { title: "Services", tData: tData });
});

router.get("/services/3", function (req, res, next) {
  const tData = getTranslationData(req);
  res.render("services-3", { title: "Services", tData: tData });
});

router.get("/about-us", function (req, res, next) {
  const tData = getTranslationData(req);
  res.render("about-us", { title: "About Us", tData: tData });
});

router.get("/process", function (req, res, next) {
  const tData = getTranslationData(req);
  res.render("process", { title: "Process", tData: tData });
});

router.get("/contact", function (req, res, next) {
  const tData = getTranslationData(req);
  res.render("contact", { title: "Contact", tData: tData });
});

router.get("/faq", function (req, res, next) {
  const tData = getTranslationData(req);
  res.render("faq", { title: "Frequently Asked Questions", tData: tData });
});

router.get("/comingsoon", function (req, res, next) {
  const tData = getTranslationData(req);
  res.render("coming-soon", { title: "Coming Soon", tData: tData });
});

module.exports = router;
