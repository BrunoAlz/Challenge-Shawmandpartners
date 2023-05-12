const express = require("express");
const router = express();

const routes = require("./UserRoutes");
router.use("/api", routes);

router.get("/", (req, res) => {
  res.send("Server working correctly");
});

module.exports = router;
