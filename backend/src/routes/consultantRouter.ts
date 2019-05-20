import { Router } from "express";
import { Consultant } from "../models/consultant";
import { ConsultantManager } from "../services/consultantService";

const consultantRouter = Router();

consultantRouter.post("/", (req, res) => {
  let consultant = new Consultant();
  consultant.firstName = req.body.firstName;
  consultant.lastName = req.body.lastName;
  consultant.email = req.body.email;
  consultant.title = req.body.title;
  consultant.role = req.body.role;

  consultant.save((err, document) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json(document);
    }
  });
});

consultantRouter.get("/", (_, res) => {
  Consultant.find((err, docs) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json(docs);
    }
  });
});

consultantRouter.get("/:id", (req, res) => {
  Consultant.findById(req.params.id, (err, doc) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.json(doc);
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

export { consultantRouter };
