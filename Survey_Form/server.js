var express = require("express")
var app = express()
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({extended: true}));


app.set("views", __dirname + '/views')
app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    res.render('index')
})

app.post('/result', function(req, res) {
    // console.log(req.body)
    res.render("result", {info: req.body})
})

app.listen(8000)