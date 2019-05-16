"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const userService = require("../services/userService");
var express_1 = require("express");
var consultant_1 = require("../models/consultant");
var consultantRouter = express_1.Router();
exports.consultantRouter = consultantRouter;
consultantRouter.post("/", function (req, res) {
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
consultantRouter.get("/", function (_, res) {
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