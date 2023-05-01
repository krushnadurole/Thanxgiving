const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    mobilenum:{
        type:String,
        // required:true
    },
    email: {
        type: String,
    },
    password: {
        type: String,
        required:true
    },
    role: {
        type: String,
        default: "user"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('user', userSchema);
// User.createIndexes();
module.exports = User
