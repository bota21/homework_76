const express = require("express");
const router = express.Router();
const { nanoid } = require("nanoid");

const createRouter = (db) => {
  router.get("/", (req, res) => {
    const message = db.getItem();
    if (req.query.datetime) {
      const date = req.query.datetime;
      const dateMsg = message.findIndex((item) => date === item.date);
      if (isNaN(new Date(date))) {
        return res.status(400).send("Invalid datetime");
      } else {
        return res.send(message.slice(dateMsg + 1));
      }
    }
    res.send(message.slice(-30));
  });

  router.post("/", (req, res) => {
    const id = nanoid();
    const date = new Date().toISOString();
    const message = { ...req.body, id, date };
    if (!req.body.author || !req.body.message) {
      return res
        .status(400)
        .send({ error: "Author and message must be present in the request" });
    } else {
      db.addItem(message);
      return res.status(200).send(message);
    }
  });
  return router;
};

module.exports = createRouter;
