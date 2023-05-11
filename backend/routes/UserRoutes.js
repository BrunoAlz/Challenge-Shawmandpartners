const express = require("express");
const {
  getUsers,
  getUserDetail,
  getUserRepos,
} = require("../controllers/userControler");
const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:username/details", getUserDetail);
router.get("/users/:username/repos", getUserRepos);

module.exports = router;
