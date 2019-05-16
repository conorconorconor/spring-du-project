"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ConsultantSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
});
exports.Consultant = mongoose_1.model("Consultant", ConsultantSchema);
//# sourceMappingURL=consultant.js.map