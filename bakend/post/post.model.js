const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let postSchema = new Schema({
    id: {
        type: Number
    },
    title: {
        type: String,
        require
    },
    detail: {
        type: String,
        require
    },
    url: {
        type: String,
        require
    },
    createdBy: {
        type: String,
        require
    },
    nMem: {
        type: Number,
        require
    },

}, {
    collection: 'Posts'
})

module.exports = mongoose.model('Post', postSchema)