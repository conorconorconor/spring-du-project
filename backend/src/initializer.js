const User = require("./models/user");
const Mongo = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";

module.exports = function init(data) {
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
              const newUser = new User({
                firstName: entry.firstName,
                lastName: entry.lastName
              });
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
};
