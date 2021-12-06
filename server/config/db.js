const mongoose = require("mongoose");

require("dotenv").config();
conn = process.env.CONN;

const connectDB = async () => {
  await mongoose.connect(conn, {
    useNewUrlParser: true,
    //useFindAndModify: true,
    useUnifiedTopology: true,
  }).then(()=> console.log("Successfully Connected"))
  .catch(error=> console.log(`Connection Failed with ${error}`) )
};

module.exports = connectDB;