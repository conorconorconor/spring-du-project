"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const userService = require("../services/userService");
var express = require("express");
var consultant_1 = require("../models/consultant");
var userRouter = express.Router();
exports.userRouter = userRouter;
userRouter.post("/", function (req, res) {
    var user = new consultant_1.Consultant();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.save(function (err, document) {
        if (err) {
            res.status(400).send(err);
        }
        else {
            res.json(document);
        }
    });
});
userRouter.get("/", function (_, res) {
    consultant_1.Consultant.find(function (err, docs) {
        if (err) {
            res.status(400).send(err);
        }
        else {
            res.json(docs);
        }
    });
});
//# sourceMappingURL=consultantRouter.js.map