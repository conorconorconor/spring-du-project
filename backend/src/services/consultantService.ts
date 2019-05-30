// const express = require("express");
import { Consultant } from "../models/consultant";
import { IConsultant } from "../interfaces/consultant";
import { Service } from "typedi";
import { IComment } from "../interfaces/comment";
import { Comment } from "../models/comment";

@Service()
export class ConsultantService {
  public createConsultant(consultant: IConsultant): Promise<IConsultant> {
    const createdConsultant = new Consultant(consultant);
    return createdConsultant.save();
  }

  public getConsultants(): Promise<IConsultant[]> {
    return Consultant.find()
      .sort("lastName")
      .populate("teamManager")
      .exec();
  }

  //returns a consultant with all of their comments
  public getConsultantById(id: string): Promise<IConsultant> {
    return Consultant.findById(id)
      .populate({ path: "comments", options: { sort: { publishDate: -1 } } })
      .populate("author")
      .populate("teamManager")
      .exec();
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

  //add a comment to a consultant
  //id refers to consultant id
  public async addComment(id: string, comment: IComment): Promise<IConsultant> {
    const newComment = new Comment(comment);
    let consultant: IConsultant;
    await newComment.save((err, _) => {
      if (err) throw new Error("Not a valid comment?");
    });
    consultant = await Consultant.findById(id, (err, result) => {
      if (err) {
        throw new Error("Consultant not found");
      }
    }).exec();
    consultant.comments.push(newComment._id);
    await consultant.save();
    return this.getConsultantById(id);
  }
}
