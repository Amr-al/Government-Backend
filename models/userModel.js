const mongoose = require("mongoose");

const userShema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
    maxLength: 20,
  },
  fullName: {
    type: String,
    required: true,
    maxLength: 40,
  },
  phone: {
    type: String,
    maxLength: 20,
  },
  image: {
    type: String,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    required: true,
  },
  admin: {
    type: Boolean,
    default: false,
  },
});
const User = mongoose.model("User", userShema);
module.exports = User;