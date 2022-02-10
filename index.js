const express = require("express");
// require("dotenv").config();

const PORT = 3000;
const HOST = "localhost";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Back-end Challenge 2021 🏅 - Space Flight News");
});

app.listen(PORT, HOST, () => console.log(`Running in http:${HOST}:${PORT}`));
