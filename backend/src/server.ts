import * as express from "express";
import * as mongoose from "mongoose";
import { consultantRouter } from "./routes/consultantRouter";
import * as bodyParser from "body-parser";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/consultants", consultantRouter);

//catch-all route
app.use("/", (request, response) => {
  response.send("Welcome to Spring 2019 DU Project");
});

mongoose.connect(
  "mongodb+srv://admin:admin@du-project-mjfgf.mongodb.net/test?retryWrites=true",
  { useNewUrlParser: true }
);
mongoose.connection.on("connected", () => {
  console.log("Connected to users DB");
});
mongoose.connection.on("error", err => {
  console.log(err);
});

const port = process.env.PORT || 4444;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
