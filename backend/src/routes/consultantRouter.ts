// const userService = require("../services/userService");
const express = require("express");
import { Consultant } from "../models/consultant";
import { ConsultantManager } from "../services/consultantService";

const userRouter = express.Router();

userRouter.post("/", (req, res) => {
  let user = new Consultant();
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
  Consultant.find((err, docs) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json(docs);
    }
  });
});

// userRouter.get("/:lastName", (req, res) => {
//   User.find({ lastName: req.params.lastName }, (err, docs) => {
//     if (err) {
//       res.status(400).send(err);
//     } else {
//       res.json(docs);
//     }
//   });
// });

// userRouter.delete("/:id", (req, res) => {
//   User.deleteOne(
//     {
//       _id: req.params.id
//     },
//     err => {
//       if (err) {
//         res.status(400).send(err);
//       } else {
//         res.send(`Successfully deleted document ${req.params.id}`);
//       }
//     }
//   );
// });

// userRouter.put("/:id", (req, res) => {
//   User.findById(req.params.id, (err, document) => {
//     if (err) {
//       res.status(400).send(err);
//     } else {
//       document.name = req.body.name;
//       document.rating = req.body.rating;
//       document.save((err, doc) => {
//         if (err) {
//           res.status(400).send(err);
//         } else {
//           res.send(doc);
//         }
//       });
//     }
//   });
// });

export { userRouter };
