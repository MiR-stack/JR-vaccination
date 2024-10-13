const { register, findStatus } = require("../controller/user.controller");

const router = require("express").Router();

router.post("/registration", register);
router.get("/status", findStatus);

module.exports = router;
