const mongoose = require('mongoose');
const { schema } = require('./auth');

const todoSchema= mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    author: String,

    Date:{
        default: Date.now(),
        type:Date,
    }
})

const todoModel = mongoose.model('todo',todoSchema);
module.exports = todoModel;