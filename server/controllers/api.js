const VehicleSchema = require("../model/vehicleModel");
const LocationSchema = require("../model/vehicleLocationModel");

const creatVehicle =  (req, res) => {
  //Check if vehicle is already registerred

   VehicleSchema.findOne(
     
    { regNumber: req.body.regNumber },
    (error, response) => {
      if (error)
        return res
          .status(500)
          .json({ message: "Error occured please try again " });

      if (response)
        return res.status(401).json({ message: "Vehicle already Registered" });

      //Save vehicle details
      let newVehicle = new VehicleSchema(req.body);
      newVehicle.save().then((data) => {
        return res.status(200).json({
          message: "Vehicle Saved Successfully",
          data,
        });
      });
    }
  );
};

const creatLocation =  (req, res) => {
   LocationSchema.find((error, response) => {
    if (error) return res.status(500).json({ message: "error occured" });

    if (!response)
      return res.status(400).json({ message: "Data not saved" });

    let location = new LocationSchema(req.body);

    location.save().then((data) => {
      return res.status(200).json({
        message: "Location Saved Successfully",
        data,
      });
    });
  });
};

const listLocations = (req, res) => {
  let response = []
  LocationSchema.find({ regNumber: req.body.regNumber }, (err, result) => {
    if (err) return res.status(500).json({ message: "An error occured" });

    // return the last 5 locations
    response = result.slice(-5)
    
    if (response.length <= 0)
      return res.status(400).json({ message: "Result not found" });

    return res.status(200).json({  
      status: "Ok",
      response,
    });
  });   
};

module.exports = { creatVehicle, creatLocation, listLocations };