var path = require("path");


module.exports = function(app) {

  app.get("/home", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/user.html"));
  });


  app.get("/", function(req, res) {
    console.log("It worked!");
  res.sendFile(path.join(__dirname, "../public/user.html"));
  });


  app.get("/groceries", function(req, res) {
    console.log("You're in groceries now");
    res.sendFile(path.join(__dirname, "../public/groceries.html"));
  });

}
