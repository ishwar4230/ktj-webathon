const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let postSchema = new Schema({
    title: {
        type: String, // title of the competition
        require
    },
    detail: {
        type: String, // details of the competition
        require
    },
    url: {
        type: String,  // link to the competition 
        require
    },
    createdBy: {
        type: String,  // user Id of the person who created the post
        require
    },
    nMem: {
        type: Number, // number of members required
        require
    },
    requests:[{
        type: String  // user Id of the person who requested to apply to form as a team member
    }],
    regStatus: {
        type: String,  // closed or still open
        default:"open"
    },
}, {
    collection: 'Posts'
})

module.exports = mongoose.model('Post', postSchema)