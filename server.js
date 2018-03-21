const express = require ('express');
const authRoutes = require('./controllers/authroutes');
const passportSetup = require('./config/passport-setup');
var db = require('./models');
var PORT = process.env.PORT || 3000;
const app = express();
var bodyParser = require("body-parser");


//set up view engine
app.set('view engine','ejs');

//set up authRoutes
app.use('/auth',authRoutes);



// Serve static content for the app from the "public" directory in the application directory.

app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// app.get('/',(req,res)=>{
//   res.render('home');
// });



var routes = require("./controllers/routes.js");
app.use(express.static('public'));
app.use(routes);

db.sequelize.sync().then(function(){
app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
  });
});
