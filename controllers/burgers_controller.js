var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var handlebarObj = {
            burger: data
        }
        res.render("index",handlebarObj);
    })

})
 router.post("api/burgers", function(req, res){
     burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, false], function(data){
         res.json(data);
     })
 })
 router.put("api/burgers/:id", function(req, res){
     var condition = "id =" + req.params.id;
     burger.updateOne({devoured: req.body.devoured}, condition, function(data){

     })
 })