const express = require("express");
const app = express();
var cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const userdata = require("./routes/userdata");
app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);

app.use("/api/v1", userdata);

module.exports = app;
