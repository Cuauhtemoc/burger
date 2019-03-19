var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

router.get("/index", function(req, res){
    burger.selectAll(function(data){
        var handlebarObj = {
            burger: data
        }
        console.log(data);
        res.render("index", handlebarObj);
    })

})
 router.post("/api/burgers", function(req, res){
     burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, false], function(data){
         res.json(data);
     })
 })
 router.put("/api/burgers/:id", function(req, res){
     var condition = "id =" + req.params.id;
     req.body.devoured = parseInt(req.body.devoured);
     console.log(req.body);
     burger.updateOne({devoured: req.body.devoured}, condition, function(data){
        //Check to see if something was changed. If not then send a not found(404) error/end the connection
        //If Successful send a success (200) code and end the connection  
        if (data.changedRows == 0) {
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
     })
 })

 module.exports = router;