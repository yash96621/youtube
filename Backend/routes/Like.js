const express = require("express");
const router = express.Router();
const Video = require("../models/Videod");
const User = require("../models/User");

router.post("/addlike", async (req, res) => {
  try {
    var video = await Video.findOne({ video_id: req.body.video_id });
    video.likes = video.likes + 1;
    var user = await User.findOne({ user_id: req.body.user_id });
    user.Liked_video.push(req.body.video_id);
    await video.save();
    await user.save().then(res.status(200).json({ success: true }));
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
});

router.post("/removelike", async (req, res) => {
  try {
    var video = await Video.findOne({ video_id: req.body.video_id });
    video.likes = video.likes - 1;
    var user = await User.findOne({ user_id: req.body.user_id });
    user.Liked_video = user.Liked_video.filter((item) => item !== req.body.video_id);
    await video.save();
    await user.save().then(res.status(200).json({ success: true }));
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
});

router.post("/removedislike", async (req, res) => {
  try {
    var video = await Video.findOne({ video_id: req.body.video_id });
    video.dislikes = video.dislikes - 1;
    var user = await User.findOne({ user_id: req.body.user_id });
    user.disLiked_video = user.disLiked_video.filter((item) => item !== req.body.video_id);
    await video.save();
    await user.save().then(res.status(200).json({ success: true }));
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
});

router.post("/adddislike", async (req, res) => {
  try {
    var video = await Video.findOne({ video_id: req.body.video_id });
    video.dislikes = video.dislikes + 1;
    var user = await User.findOne({ user_id: req.body.user_id });
    user.disLiked_video.push(req.body.video_id);
    await video.save();
    await user.save().then(res.status(200).json({ success: true }));
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
});
