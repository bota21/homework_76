const express = require("express");
const app = express();
const port = 8000;
const messages = require("./main");
const fileDb = require("./fileDb");
const cors = require("cors");

fileDb.init();

app.use(cors());
app.use(express.json());
app.use("/messages", messages(fileDb));

app.listen(port, () => {
  console.log("Server started at port " + port);
});
