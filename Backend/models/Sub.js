const mongoose = require("mongoose");

const { Schema } = mongoose;

const SubSchema = new Schema({
  channel_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  subscriber: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
      },
      count: {
        type: Number,
        default: 0,
      },
    },
  ],
});

Sub = mongoose.model("Sub", SubSchema);
module.exports = Sub;
