const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Lumora Rewards Backend!</h1>");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
