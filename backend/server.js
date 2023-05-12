const express = require("express");
const cors = require("cors");

const port = 3000
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ credentials: true, origin: "*" }));

// Configuring Routes
const router = require("./routes/Router.js");
app.use(router);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
