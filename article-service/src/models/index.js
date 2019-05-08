const mongoose = require('mongoose');

var Article = mongoose.model('Article',{
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    description: {
        type: String,
        required: true,
        minlegnth: 1,
        trim: true
    },
    ispublished: {
        type: Boolean,
        default: false
    }
})
module.exports = Article;