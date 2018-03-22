const authrouter = require('express').Router();
const passport = require('passport');
//auth login
authrouter.get('/login',(req, res)=>{
  res.render('login');
});
//auth with google
authrouter.get('/google',passport.authenticate('google',{
scope: ['profile']
}));
//auth logout
authrouter.get('/logout', (req, res)=>{
  res.send('logging out');
})
module.exports = authrouter;
