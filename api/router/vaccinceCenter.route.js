const {
  findVaccineCenters,
} = require("../controller/vaccinceCenter.controller");

const router = require("express").Router();

router.get("/centers", findVaccineCenters);

module.exports = router;
