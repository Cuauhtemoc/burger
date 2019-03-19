var express = require("express");
var PORT = process.env.PORT || 8080;
var app = express();
var expressHandlebars = require("express-handlebars");
var router = require("./controllers/burgers_controller");

//Set up our static files to be loaded when the page starts
app.use(express.static("public"));
 
//this the middleware that will handle the parsing of the data we need
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//setting up handle bars as our template engine with main.handlebars as our default layout
app.engine("handlebars", expressHandlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars");

//get the routes to serve different files/get data to/from the client 
app.use(router);

//listeing to req from the client on the routes
app.listen(PORT, function(err){
    if(err)
    {
        console.log(err)
    }
    console.log("Listening on port: " + PORT);
})