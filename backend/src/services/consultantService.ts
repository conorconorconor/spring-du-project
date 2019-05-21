// const express = require("express");
import { Consultant } from "../models/consultant";
import { IConsultant } from "../interfaces/consultant";
import { Service } from "typedi";

@Service()
export class ConsultantService {
  public createConsultant(consultant: IConsultant): Promise<IConsultant> {
    const createdConsultant = new Consultant(consultant);
    return createdConsultant.save();
  }

  public getConsultants(): Promise<IConsultant[]> {
    return Consultant.find().exec();
  }

  public getConsultantById(id: string): Promise<IConsultant> {
    let result: IConsultant;
    return Consultant.findById(id).exec();
  }

  public updateConsultant(
    id: string,
    consultant: IConsultant
  ): Promise<IConsultant> {
    return Consultant.findOneAndUpdate({ _id: id }, consultant, {
      new: true
    }).exec();
  }

  public deleteConsultantById(id: string): void {
    Consultant.findByIdAndDelete(id).exec();
  }
}
