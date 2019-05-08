const mongoose = require('mongoose');

var User = mongoose.model('User',{
    firstname: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        minlegnth: 1,
        trim: true
    },
    lastlogindate: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: false
    }
})
module.exports = User;