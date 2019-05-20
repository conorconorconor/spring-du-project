import * as mongoose from "mongoose";
import { App } from "./app";
import * as http from "http";
import express = require("express");
import bodyParser = require("body-parser");
import { createExpressServer } from "routing-controllers";
import { ConsultantsController } from "./controllers/consultantsController";
import "reflect-metadata";

// const app = express();

// app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.use("/consultants", consultantRouter);

// //catch-all route
// app.use("/", (request, response) => {
//   response.send("Welcome to Spring 2019 DU Project");
// });

const app: App = new App();

// const server: http.Server = http.createServer(app.express);

// const app = createExpressServer({
//   controllers: [ConsultantsController]
// });

const port = process.env.PORT || 4444;
app.listen();

// server.listen(port, () => {
//   console.log(`listening on port ${port}`);
// });
