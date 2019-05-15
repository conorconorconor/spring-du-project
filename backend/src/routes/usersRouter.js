// const userService = require("../services/userService");
const User = require("../models/user");
const express = require("express");

const userRouter = express.Router();

handleError = err => {
  res.status(400).send(err);
};

userRouter.post("/", (req, res) => {
  let user = new User();
  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
  user.save((err, document) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json(document);
    }
  });
});

userRouter.get("/", (_, res) => {
  User.find((err, docs) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json(docs);
    }
  });
});

userRouter.get("/:lastName", (req, res) => {
  User.find({ lastName: lastName }, (err, docs) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json(docs);
    }
  });
});

userRouter.delete("/:id", (req, res) => {
  User.deleteOne(
    {
      _id: req.params.id
    },
    err => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.send(`Successfully deleted document ${req.params.id}`);
      }
    }
  );
});

userRouter.put("/:id", (req, res) => {
  User.findById(req.params.id, (err, document) => {
    if (err) {
      res.status(400).send(err);
    } else {
      document.name = req.body.name;
      document.rating = req.body.rating;
      document.save((err, doc) => {
        if (err) {
          res.status(400).send(err);
        } else {
          res.send(doc);
        }
      });
    }
  });
});

module.exports = userRouter;