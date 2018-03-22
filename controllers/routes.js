var express = require("express");
const router = require('express').Router();
var path = require("path");


// router.get("/login", function(req, res){
//
//   res.render("index");
// });


const passport = require('passport');

//auth login
router.get('/',(req, res)=>{
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
