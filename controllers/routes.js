var express = require("express");
var router = express.Router();
var path = require("path");



router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/signin.html"));
});

router.get("/user", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/userpage.html"));
});

router.get("/search", function(req, res){
  res.sendFile(path.join(__dirname, "../public/search.html"));

});

module.exports = router;
