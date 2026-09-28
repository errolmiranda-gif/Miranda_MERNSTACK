const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello from my server!");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

app.get("/api/message", (req, res) => {
  res.json({
    message: "Hello from the Express!",
  });
});
