const express = require('express')
const CommentController = require('../controllers/Comment.controller');
const router = express.Router();
router.route('/')
    .get(CommentController.list);

router.post('/comments', CommentController.create);
router.get('/comments', CommentController.findbyArticleId)

module.exports = router;