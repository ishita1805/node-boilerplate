const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  password: {
    type: String,
    required: true
  },
  number: {
      type:Number,
      required:true,
      unique:true
  },
  demoSchemaRef: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DemoSchema",
    }
});

module.exports = mongoose.model("User", userSchema);
