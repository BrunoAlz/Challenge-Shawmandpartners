const express = require("express");

const port = 3000
const app = express();

// Configuration of Responses in JSON and Form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Configuring Routes
const router = require("./routes/Router.js");
app.use(router);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
