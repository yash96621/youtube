const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://Yashsavani:ysavani704@cluster0.6ozds.mongodb.net/memehub?retryWrites=true&w=majority";

const connectTomongo = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(mongoURI, { useNewUrlParser: true })
    .then(console.log("connected to mongo sucessfully"))
    .catch((err) => {
      console.log("no connection", err);
    });
};
//

module.exports = connectTomongo;
