"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express");
var consultant_1 = require("../models/consultant");
var inversify_1 = require("inversify");
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
    ConsultantManager = __decorate([
        inversify_1.injectable()
    ], ConsultantManager);
    return ConsultantManager;
}());
exports.ConsultantManager = ConsultantManager;
//# sourceMappingURL=consultantService.js.map