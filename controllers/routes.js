var express = require("express");
const router = require('express').Router();
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


const passport = require('passport');

//auth login
router.get('/login',(req, res)=>{
  res.render('login');

});

//auth with google
router.get('/google',passport.authenticate('google',{
scope: ['profile']

}));

//auth logout
router.get('/logout', (req, res)=>{
  res.send('logging out');
})

module.exports = router;
