const mongoose = require('mongoose');
const {nowUTC} = require("../utils/datetime");
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {type: String, required: true, trim: true},
  category: {type: String, required: true},
  register_at: {type: Date, default: nowUTC()},
  is_active: {type: Boolean, default: true},
  image_url: String
});

const PostsModel = mongoose.model('Post', schema);

module.exports = PostsModel;
