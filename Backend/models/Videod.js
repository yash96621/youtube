const mongoose = require("mongoose");

const { Schema } = mongoose;

const videoSchema = new Schema({
  video_name: {
    type: String,
    required: true,
  },
  channel_name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  views: {
    type: Number,
  },
  likes: {
    type: Number,
  },
});

Videos = mongoose.model("video", videoSchema);
module.exports = Videos;
