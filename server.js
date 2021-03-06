// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// FRIENDS (DATA)
// =============================================================

var friends = [{
  name:"John",
  photo: "",
  scores: [
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
  ]
}, {
  name: "Matt",
  photo:"",
  scores:[
      2,
      4,
      1,
      5,
      3,
      1,
      2,
      1,
      5,
      2
  ]
}];



// Routes
// =============================================================
// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
