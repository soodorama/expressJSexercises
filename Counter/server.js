var express = require("express");
// new code:
var session = require('express-session');
// original code:
var app = express();
// more new code:
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { counter: 0 }
}))

app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

// root route
app.get('/', function (req, res){
    if (typeof req.session.counter == 'undefined') {
        req.session.counter = 1;
    }
    else {
        req.session.counter++;
    }
    res.render('index', {counter: req.session.counter});
});

app.get('/plus2', function (req, res){
    req.session.counter += 2;
    res.render('index', {counter: req.session.counter});
});

app.get('/reset', function (req, res){
    req.session.counter = 1;
    res.render('index', {counter: req.session.counter});
});

app.listen(8000, function() {
    console.log("listening on port 8000");
})