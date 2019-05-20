// const express = require("express");
import { Consultant } from "../models/consultant";
import { IConsultant } from "../interfaces/consultant";
import { Service } from "typedi";

@Service()
export class ConsultantService {
  createConsultant(consultant: IConsultant): Promise<IConsultant> {
    const createdConsultant = new Consultant(consultant);
    return createdConsultant.save();
  }

  getConsultants(): Promise<IConsultant[]> {
    return Consultant.find().exec();
  }

  getConsultantById(id: string): Promise<IConsultant> {
    let result: IConsultant;
    return Consultant.findById(id).exec();
  }
}
