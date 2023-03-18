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
  },
  type: {
    type: String,
    required: true,
  },
  video_link: {
    type: String,
    required: true,
  },
  thumbnail_link: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  views: {
    type: Number,
    default: 0,
  },
  likes: {
    type: Number,
    default: 0,
  },
  dislikes: {
    type: Number,
    default: 0,
  },
});

Videos = mongoose.model("video", videoSchema);
module.exports = Videos;
