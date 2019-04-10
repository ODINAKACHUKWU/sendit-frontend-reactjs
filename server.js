const path = require("path");
const express = require("express");

const app = express();

app.use(express.static(path.join(__dirname, "/build")));

app.get("*", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "/build") });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App listening on Port ${PORT}...`);
});
