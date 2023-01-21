const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let requestSchema = new Schema({
  id:{
    type:Number
  },
    status:{
        type:Boolean,
        default:false
    },
    ownerId:{
        type:String,
        require
    },
    userId:{
        type:String,
        require
    }
    
}, {
    collection: 'Posts'
  })
  
module.exports = mongoose.model('Request', requestSchema)