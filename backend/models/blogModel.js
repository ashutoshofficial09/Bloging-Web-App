const mongoose = require("../connection");

const schema = new mongoose.Schema({
  title: String,
  description: String,
  tags: Array,
  data: Object,
  thumbnail: String,
  author: { type: mongoose.Types.ObjectId, ref: "users" },
  created: { type: Date, default: new Date() },
});

const model = mongoose.model("blogs", schema);

module.exports = model;
