"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const Consultant = require("./models/consultant");
var consultant_1 = require("./models/consultant");
var Mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
function init(data) {
    Mongo.connect(url, function (err, db) {
        if (err) {
            console.log(err);
        }
        else {
            db.db("users").collection("users", function (err, collection) {
                if (err) {
                    console.log(err);
                }
                else {
                    collection.remove({}, function () {
                        var _loop_1 = function (entry) {
                            var newUser = new consultant_1.Consultant();
                            newUser.firstName = entry.firstName;
                            newUser.lastName = entry.lastName;
                            newUser.save(function (err, document) {
                                if (err) {
                                    console.log(err);
                                }
                                else {
                                    console.log("Saved " + entry.firstName + " + " + entry.lastName);
                                }
                            });
                        };
                        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                            var entry = data_1[_i];
                            _loop_1(entry);
                        }
                    });
                }
            });
        }
    });
}
exports.init = init;
//# sourceMappingURL=initializer.js.map