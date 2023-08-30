const express = require("express");
const songRoutes = require("./routes/songRoutes");
require("dotenv").config();
const port = process.env.PORT;

const app = express();
app.use("/", songRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
