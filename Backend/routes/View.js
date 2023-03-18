const express = require("express");
const router = express.Router();
const Video = require("../models/Videod");
const User = require("../models/User");

router.post("/view", async (req, res) => {
  try {
    var video = await Video.findOne({ video_id: req.body.video_id });
    video.views = video.views + 1;
    var user = await User.findOne({ user_id: req.body.user_id });
    user.history.push(req.body.video_id);
    await video.save();
    await user.save().then(res.status(200).json({ success: true }));
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
});
module.exports = router;
