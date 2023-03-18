const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Sub = require("../models/Sub");

router.post("/addsub", async (req, res) => {
  try {
    const ch_id = req.body.channel_id;
    const user_id = req.body.user_id;
    const sub = await Sub.findOne({ channel_id: ch_id });
    sub.subscriber = sub.subscriber + 1;
    await sub.save();
    const user = await User.findById(user_id);
    user.Sub.push(ch_id);
    await user.save();
    res.status(200).json({ sucess: true });
  } catch (error) {
    res.status(500).json({ sucess: false, error });
  }
});

router.post("/removesub", async (req, res) => {
  try {
    const ch_id = req.body.channel_id;
    const user_id = req.body.user_id;
    const sub = await Sub.findOne({ channel_id: ch_id });
    var user = await User.findById(user_id);
    sub.subscriber = sub.subscriber - 1;
    user.Sub = user.Sub.filter((item) => item !== ch_id);
    await sub.save();
    await user.save();
    res.status(200).json({ sucess: true });
  } catch (error) {
    res.status(500).json({ sucess: false, error });
  }
});

module.exports = router;
