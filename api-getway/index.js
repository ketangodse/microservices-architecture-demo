const express = require('express');
const axios = require('axios')
var cors = require('cors');
const bodyParser = require("body-parser");
var app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/api/article/:id/comments', (req, res, next) => {
  var article;
  var articleid = req.params.id;
  axios.get('http://localhost:4000/api/article/'+articleid+'/comments')
  .then((articleDetails) => {
     return res.send(articleDetails.data);    
  });
  
})

app.get('/api', (req, res, next) => {
  axios.get('http://localhost:4000/api/article/')
  .then((articleDetails) => {
    console.log(articleDetails.data);
    return res.send(articleDetails.data);  
  })
  
})

app.post('/api/new', (req, res, next) => {

  axios.post('http://localhost:4000/api/create', req.body)
  .then((articleDetails) => {
    
    return res.status(200).send();  
  })
  
})

app.post('/api/comments', (req, res, next) => {

  axios.post('http://localhost:4001/api/comments', req.body)
  .then((commentDetail) => {
    
    return res.status(200).send();  
  })
  
})

app.listen(3999, () => {
  console.log(`Started up to port..... 3999`);
});
