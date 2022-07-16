const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  name: String,
  genre: String,
  authorid: String,
});

const book = mongoose.model("book", BookSchema);

module.exports = book;
