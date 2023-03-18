const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  youtube: {
    type: Boolean,
    default: false,
  },
  history_on: {
    type: Boolean,
    default: true,
  },
  watch_list: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  history: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  User_video: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  Download_video: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  Comment_video: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  Sub: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  Liked_video: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  disLiked_video: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  notify_count: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

User = mongoose.model("user", UserSchema);
module.exports = User;
