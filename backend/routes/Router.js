const express = require("express");
const router = express();

router.use("/api/user", require("./UserRoutes"));

module.exports = router;
