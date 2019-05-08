const Comment = require('../models');
const ObjectId = require('mongodb').ObjectID;
const mongoose = require('mongoose');

function list(req, res, next){
    Comment.find().then((comments) =>{
    res.send({comments});
    }, (e) =>{
        console.log(e);
        res.status(400).send(e);
    })
}

function findbyArticleId(req,res,next){
    try {
    
        Comment.find({'articleId': req.query.articleId}).then(
          comments =>{
            res.send({comments});
          }
        ); 
    
       // res.send(Article.findOne({ "Article.": req.params.id }));
      } catch (e) {
          console.log(e);
        res.status(400).send(e);
      }
}

function create(req, res){

    var aObjectId = mongoose.Types.ObjectId(req.body.selectedArt);
    var comment = new Comment({
        comment: req.body.comment,
        user: req.body.username,
        name: req.body.name,
        articleId: mongoose.Types.ObjectId(req.body.selectedArt)
        
    });

    comment.save().then((art) =>{
        res.send(art);
    }, (e) =>{
        res.status(400).send(e);
    })
}

module.exports = {list,create,findbyArticleId}