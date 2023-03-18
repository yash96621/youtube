const mongoose = require("mongoose");

const { Schema } = mongoose;

const CommentsSchema = new Schema({
  video_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  Comments: [
    {
      user_photo: {
        type: String,
      },
      user_name: {
        type: String,
      },
      message: {
        type: String,
      },
    },
  ],
});
Comments = mongoose.model("Comments", CommentsSchema);
module.exports = Comments;
