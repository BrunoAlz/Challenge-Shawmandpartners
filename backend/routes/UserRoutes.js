const express = require("express");
const { getUsers, getUserDetail } = require("../controllers/userControler");
const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:username/details", getUserDetail);

module.exports = router;
