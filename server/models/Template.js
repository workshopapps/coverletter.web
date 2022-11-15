const mongoose = require("mongoose");

const TemplateSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide user"],
  },
  template:{
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Template', TemplateSchema)