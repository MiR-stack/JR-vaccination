const { register, findUser } = require("../controller/user.controller");

const router = require("express").Router();

router.post("/registration", register);
router.get("/", findUser);

module.exports = router;
