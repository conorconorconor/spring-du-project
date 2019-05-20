// const express = require("express");
import { Consultant } from "../models/consultant";
import { IConsultant } from "../interfaces/consultant";
import { Service } from "typedi";
import { DocumentQuery } from "mongoose";

@Service()
export class ConsultantService {
  createConsultant(consultant: IConsultant): Promise<IConsultant> {
    let newConsultant: IConsultant = consultant;
    const createdConsultant = new Consultant(consultant);
    // user.firstName = data.firstName;
    // user.lastName = data.lastName;
    // user.save((err, document) => {
    //   if (err) {
    //     return err;
    //   } else {
    //     return document;
    //   }
    // });
    // newConsultant.firstName = consultant.firstName;
    // newConsultant.lastName = consultant.lastName;
    return createdConsultant.save((err, _) => {
      if (err) {
        throw new Error(err);
      }
    });
  }

  async getConsultants(): Promise<IConsultant[]> {
    let consultants: IConsultant[];
    // return Consultant.find({}, (err, docs: IConsultant[]) => {
    //   if (err) {
    //     throw new Error("No consultants found");
    //   }
    //   results = docs;
    //   return results;
    // }).then();

    await Consultant.find().then(results => {
      console.log(results);
      consultants = results;
    });

    return consultants;
  }

  getConsultantById(id: number): IConsultant {
    let result: IConsultant;
    Consultant.findById(id, (err, doc) => {
      if (err) {
        throw new Error(err);
      }
      result = doc;
    });

    return result;
  }
}
