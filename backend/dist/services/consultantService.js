"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express");
var consultant_1 = require("../models/consultant");
// @injectable()
var ConsultantManager = /** @class */ (function () {
    function ConsultantManager() {
    }
    ConsultantManager.prototype.createUser = function (data) {
        var consultant = new consultant_1.Consultant();
        // user.firstName = data.firstName;
        // user.lastName = data.lastName;
        // user.save((err, document) => {
        //   if (err) {
        //     return err;
        //   } else {
        //     return document;
        //   }
        // });
        consultant.firstName = data.firstName;
        consultant.lastName = data.lastName;
        return consultant.save();
    };
    return ConsultantManager;
}());
exports.ConsultantManager = ConsultantManager;
//# sourceMappingURL=consultantService.js.map