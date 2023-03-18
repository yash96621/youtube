const express = require("express");
const router = express.Router();
const Comment = require("../models/Comments");
const User = require("../models/User");

router.post("/comment", async (req, res) => {
  try {
    var com = await Comment.findOne({ video_id: req.body.video_id });
    var user = await User.findOne({ user_id: req.body.user_id });
    user.Comment_video.push(video_id);
    com.Comments.push({
      user_photo: req.body.user_photo,
      user_name: req.body.user_name,
      message: req.body.message,
    });
    await user.save();
    com.save().then(res.status(200).json({ success: true }));
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
});
