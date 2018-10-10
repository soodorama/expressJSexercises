var express = require("express");

var app = express();

app.get('/cats', function(request, response) {
    var cats_array = [
        {name: "cat1", food: "spaghetti", age: "3", spots: ["under bed", "in sunbeam"]}, 
        {name: "cat2", food: "meowmix", age: "12", spots: ["under car", "in box", "on keybord"]},
        {name: "cat3", food: "hairballs", age: "7", spots: ["doesn't sleep"]}
    ];
    response.render('cats', {cats: cats_array});
})

app.get('/details/cat1', function(request, response) {
    var cat = {name: "cat1", food: "spaghetti", age: "3", spots: ["under bed", "in sunbeam"]} 
    response.render('details', {cat: cat});
})

app.get('/details/cat2', function(request, response) {
    var cat = {name: "cat2", food: "meowmix", age: "12", spots: ["under car", "in box", "on keybord"]}
    response.render('details', {cat: cat});
})

app.get('/details/cat3', function(request, response) {
    var cat = {name: "cat3", food: "hairballs", age: "7", spots: ["doesn't sleep"]}
    response.render('details', {cat: cat});
})

app.listen(8000, function() {
    console.log("listening on 8000");
});

// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it


// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');