const mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var Comment = mongoose.model('Comment',{
    comment: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    user: {
        type: String,
        required: true,
        minlegnth: 1,
        trim: true
    },
    name: {
        type: String,
        required: true,
        minlegnth: 1,
        trim: true
    },
    articleId:
    {
        type: ObjectId
    }
})
module.exports = Comment;