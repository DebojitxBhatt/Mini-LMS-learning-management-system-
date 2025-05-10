import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
 UserName: {
    type: String,
    required: true,
    trim: true,
  },
  
  password: {
    type: String,
    required: true,
  },

},{timestamps:true,});

const User = mongoose.model('User', userSchema);
module.exports = User;