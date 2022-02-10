const express = require("express");

const PORT = 3000;
const HOST = "localhost";

const app = express();
app.use(express.json());

app.listen(PORT, HOST, () => console.log(`Running in http:${HOST}:${PORT}`));
