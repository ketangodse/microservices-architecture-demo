require("./config/config");
const _ = require("lodash");
const express = require("express");
const bodyParser = require("body-parser");
const { ObjectID } = require("mongodb");
var { mongoose } = require("./db/mongoose");
var article = require("./models/index");
var routes = require('./routes/index');

var app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
//app.use(helment());
app.use('/api', routes);


app.listen(port, () => {
    console.log(`Started up to port..... ${port}`);
});

module.exports = { app };
