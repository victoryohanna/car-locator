const mongoose = require("mongoose");

const VehicleSchema = mongoose.Schema({
  vehicleId: {
    type: String,
  },
  regNumber: {
    type: String,
    require: true,
  },
  vehicleMake: {
    type: String,
  },
  vehicleModel: {
    type: String,
  },
  vehicleColor: {
    type: String,
  },
  engineCapacity: {
    type: String,
  },
  fuelType: {
    type: String,
  },
  chasisNumber: {
    type: String,
  },
});

module.exports = mongoose.model("car", VehicleSchema);
