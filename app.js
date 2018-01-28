
var express = require('express');
var app = express();
var request = require('request');
var bodyParser = require('body-parser');
var navigator = require('navigator');

app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req,res){
    res.render("search.ejs");
})

app.post("/search",function(req,res){
   request("http://api.openweathermap.org/data/2.5/weather?apikey=4784a38fc117f47318260688d7efeabb&q="+req.body.city,function(error,response,body){
        var results = JSON.parse(body);
        res.render("data.ejs",{results: results});
   })
})
app.listen(8000, function(){
    console.log("Weather app has started");
})