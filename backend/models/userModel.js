const mongoose = require('mongoose');
const validator=require('validator')

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, 'A username is required'],
        maxlength: [15, 'Username cannot be more than 15 characters'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        validate:{
            validator:validator.isEmail,
            message:'Please provide a valid email address'
        }
    },
    password: {
        type: String,
        required: [true, 'This field is required'],
        minlength: [6, 'Password must be more than 6 characters'],
        trim: true
    },
    image: {
        type: String,
        trim: true,
        default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    }
})

const User = mongoose.model('User', userSchema);
module.exports = User;