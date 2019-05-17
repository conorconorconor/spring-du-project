"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongoose = require("mongoose");
var initializer_1 = require("./initializer");
var consultantRouter_1 = require("./routes/consultantRouter");
var data_1 = require("./data");
var app = express();
initializer_1.init(data_1.default);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/consultants", consultantRouter_1.userRouter);
//catch-all route
app.use("/", function (request, response) {
    response.send("Welcome to Spring 2019 DU Project");
});
mongoose.connect("mongodb://localhost:27017/users", { useNewUrlParser: true });
mongoose.connection.on("connected", function () {
    console.log("Connected to users DB");
});
mongoose.connection.on("error", function (err) {
    console.log(err);
});
var port = process.env.PORT || 4444;
app.listen(port, function () {
    console.log("listening on port " + port);
});
//# sourceMappingURL=server.js.map