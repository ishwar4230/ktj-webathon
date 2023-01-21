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
}, {
    collection: 'Users'
  })
  
module.exports = mongoose.model('user', userSchema)