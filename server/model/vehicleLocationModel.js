const mongoose = require("mongoose");

const LocationSchema = mongoose.Schema({
  vehicleId: {
    type: String,
  },
  regNumber: {
    type: String,
  },
  latitude: {
    type: String,
  },
  longitude: {
    type: String,
  },
  locationName: {
    type: String,
  },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("location", LocationSchema);
