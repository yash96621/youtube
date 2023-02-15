const { dblClick } = require("@testing-library/user-event/dist/click");
const express = require("express");
const router = express.Router();

const Videos = require("../models/Videod");

router.post("/addvideo", async (req, res) => {
  try {
    await console.log(req.body);
    const video = new Videos({
      name: await req.body.names,
      link: await req.body.link,
    });

    await video.save().then(
      res.json({
        message: "video is saved",
      })
    );
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: error,
    });
  }
});

router.post("/getvideo", async (req, res) => {
  try {
    const videos = await Videos.find({ id: req.body.id });
    res.status(200).json({ videos });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Internal server error",
    });
  }
});

router.post("/getallvideo", async (req, res) => {
  try {
    const videos = await Videos.find({});
    res.status(200).json({ videos });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Internal server error",
    });
  }
});

router.delete("/deletevideo", async (req, res) => {
  try {
    Videos.findByIdAndDelete(id, () => {
      res.status(200).json({ message: "video deleted" });
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Internal server error",
    });
  }
});

module.exports = router;
