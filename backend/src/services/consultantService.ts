// const express = require("express");
import { Consultant } from "../models/consultant";
import { IConsultant } from "../interfaces/consultant";
import { injectable } from "inversify";

// @injectable()
export class ConsultantManager {
  createUser(data) {
    let consultant: IConsultant = new Consultant();
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
  }
}
