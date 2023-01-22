const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let requestSchema = new Schema({
    status:{
        type:String,   //  accepted or rejected or pending
        default:"pending"
    },
    // ownerId:{
    //     type:String,  // user id of the owner of the post to whom this request is sent
    //     require
    // },
    userId:{
        type:String,
        require 
    },
    postId:{
        type:String,
        require
    },
}, {
    collection: 'Requests'
  })
  
module.exports = mongoose.model('Request', requestSchema)