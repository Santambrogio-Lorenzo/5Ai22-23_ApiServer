const express = require('express');

var cors = require("cors");
const app = express();

app.use(cors());

//-- http://localhost:3000/
app.get('/', function (req, res) {
  res.send('Hello World');
});

//-- http://localhost:3000/match?a=checchia&b=belvedere
app.get('/match', function (req, res) {
    num = Math.round(Math.random() * 101);
    res.send(req.query.a+" percentuale match "+req.query.b+"= "+num+"%");
  });

app.listen(3000);
