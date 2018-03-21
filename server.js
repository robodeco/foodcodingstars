var express = require("express");
var bodyParser = require("body-parser");
var db = require('./models');

var PORT = process.env.PORT || 3000;

var app = express();
// Serve static content for the app from the "public" directory in the application directory.


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var routes = require("./controllers/routes.js")

app.use(express.static('public'));
app.use(routes);

db.sequelize.sync().then(function(){
app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
  });
});
