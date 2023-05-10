const express = require("express");
const router = express();

router.use("/api/user", require("./userRoutes"));

router.get("/", (req, res) => {
  res.send("Server working correctly");
});

module.exports = router;
