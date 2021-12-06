const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();

require("dotenv").config();
const port = process.env.PORT || 4000;

//Initialize DB connection
connectDB();

//Parse request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set CORS for all headers
app.use(cors());

// Add Routes
const api = require("./routes/router");
app.use("/", api);

app.listen(port, () => {
  console.log(`App Listening on Port ${port}`);
});