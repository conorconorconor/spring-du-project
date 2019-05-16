import { IConsultant } from "./interfaces/consultant";

// const Consultant = require("./models/consultant");
import { Consultant } from "./models/consultant";
const Mongo = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";

function init(data) {
  Mongo.connect(url, (err, db) => {
    if (err) {
      console.log(err);
    } else {
      db.db("users").collection("users", (err, collection) => {
        if (err) {
          console.log(err);
        } else {
          collection.remove({}, () => {
            for (let entry of data) {
              const newUser: IConsultant = new Consultant();
              newUser.firstName = entry.firstName;
              newUser.lastName = entry.lastName;
              newUser.save((err, document) => {
                if (err) {
                  console.log(err);
                } else {
                  console.log(`Saved ${entry.firstName} + ${entry.lastName}`);
                }
              });
            }
          });
        }
      });
    }
  });
}

export { init };
