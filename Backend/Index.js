const express = require("express");
const connectTomongo = require("./db");
const app = express();
connectTomongo();
app.use(express.json());

const port = process.env.PORT || 5000;

app.use("/api/video", require("./routes/video"));

app.listen(port, () => {
  console.log("port is secessfully called at" + port);
});
