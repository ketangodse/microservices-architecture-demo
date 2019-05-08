const express = require('express')
const articleController = require('../controllers/article.controller');
const router = express.Router();
router.route('/')
    .get(articleController.list);

router.post('/create', articleController.create);
router.get('/article/',articleController.list);
router.get('/article/:id/comments',articleController.findArticle);
//router.get('/article/:id',articleController.findArticle);

module.exports = router;