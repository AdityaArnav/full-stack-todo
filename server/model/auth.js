const mongoose = require('mongoose');

const authSchema = mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    email: {
        type:String,
        // type: Unique,
        required: true
    },
    username:{
        type:String,
        required: true
    },
    
        password: {
            type:String,
            required: true
        },

        confirmPassword: {
            type: String,
            required: true
        }
            
})


const usermodel = mongoose.model('user', authSchema);

module.exports = usermodel;