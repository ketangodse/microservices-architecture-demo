const Article = require("../models/index");
const ObjectId = require('mongodb').ObjectID;
const axios = require('axios');

function list(req, res, next) {
  Article.find().then(
    articles => {
      
      res.send(articles);
    },
    e => {
      console.log(e);
      res.status(400).send(e);
    }
  );
}

function findArticle(req, res, next) {
  try {
    var artDetail ={
      title: '',
      description: '',
      _id: '',
      comments: []
    }
    articleId = req.params.id;
    Article.findOne({ _id: ObjectId(articleId)}).then(
      article =>{
        artDetail.title = article.title
        artDetail._id = article._id;
        artDetail.description = article.description;
        axios.get('http://localhost:4001/api/comments?articleId='+articleId)
    .then((articleDetails) => {
      for (let index = 0; index < articleDetails.data.comments.length; index++) {
        var comments = {comment:articleDetails.data.comments[index].comment,
          name:articleDetails.data.comments[index].name,
          username:articleDetails.data.comments[index].user
        };

        artDetail.comments.push({comments:comments})
               
      }      
     
      return res.status(200).send(artDetail);  
    })
      }
    ); 
    
   //res.send(Article.findOne({ "Article.": req.params.id }));
  } catch (e) {
      console.log(e);
    res.status(400).send(e);
  }
}

function create(req, res) {
  var article = new Article({
    title: req.body.article.title,
    description: req.body.article.description
  });

  article.save().then(
    art => {
      res.send(art);
    },
    e => {
      res.status(400).send(e);
    }
  );
}

module.exports = { list, create, findArticle };
