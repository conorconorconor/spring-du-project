import "reflect-metadata";
import * as express from "express";
import { Container } from "typedi";
import { useContainer, useExpressServer } from "routing-controllers";
import * as bodyParser from "body-parser";
import { ConsultantsController } from "./controllers/consultantsController";
import * as mongoose from "mongoose";

export class App {
  public express: express.Application;

  constructor() {
    useContainer(Container);

    this.express = express();
    this.connectToDB();
    this.middleWare();
    useExpressServer(this.express, {
      controllers: [ConsultantsController],
      classTransformer: false
    });
  }

  public listen() {
    this.express.listen(process.env.PORT || 4444, () => {
      console.log(`App listening on the port ${process.env.PORT || 4444}`);
    });
  }

  private middleWare() {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  private connectToDB() {
    mongoose.connect(
      "mongodb+srv://admin:admin@du-project-mjfgf.mongodb.net/test?retryWrites=true",
      { useNewUrlParser: true, useFindAndModify: false }
    );
    mongoose.connection.on("connected", () => {
      console.log("Connected to DB");
    });
    mongoose.connection.on("error", err => {
      console.log(err);
    });
  }
}
