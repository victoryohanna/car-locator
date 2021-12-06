const express = require("express");
const router = express.Router();

const { creatVehicle, creatLocation, listLocations } = require("../controllers/api");

router.post("/register", creatVehicle);
router.post("/locations", creatLocation);
router.post("/list-locations", listLocations);

module.exports = router;