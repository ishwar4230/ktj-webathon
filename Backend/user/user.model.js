const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let userSchema = new Schema({
  name: {
    type: String,
    require
  },
  username:{
      type: String,
      require
  },
  posts:[{
      type: String  // post Id of the post created by the user
  }],
}, {
    collection: 'Users'
  })
  
module.exports = mongoose.model('user', userSchema)