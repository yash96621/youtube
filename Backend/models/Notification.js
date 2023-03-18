const mongoose = require("mongoose");

const { Schema } = mongoose;

const NotifySchema = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  Notify_video_id: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  ],
  main: {
    type: Number,
  },
  Update: {
    type: Number,
  },
});

Notify = mongoose.model("Notify", NotifySchema);
module.exports = Notify;
