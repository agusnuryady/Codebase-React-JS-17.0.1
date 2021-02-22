// eslint-disable-next-line
const express = require("express");
// eslint-disable-next-line
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "build")));
// eslint-disable-next-line
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(3000);
