const express = require ('express');
const authRoutes = require('./controllers/authroutes');
const passportSetup = require('./config/passport-setup');
var db = require('./models');
var PORT = process.env.PORT || 3000;
const app = express();
var bodyParser = require("body-parser");
require("dotenv").config();


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


require("./routes/api-routes.js")(app);
require("./routes/htmlRoutes.js")(app);
var routes = require("./controllers/routes.js");
app.use(express.static('public'));
app.use(routes);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
