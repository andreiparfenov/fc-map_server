const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const place = require('../routes/place');

const app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/frontendchallenge_db');
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
app.use('/places', place);

app.listen(process.env.PORT || 8081)