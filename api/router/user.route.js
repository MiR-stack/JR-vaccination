const { register } = require("../controller/user.controller");

const router = require("express").Router();

router.post("/registration", register);

module.exports = router;
