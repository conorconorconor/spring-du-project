"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var consultantService_1 = require("./services/consultantService");
var container = new inversify_1.Container();
exports.container = container;
container.bind(consultantService_1.ConsultantManager).toSelf();
//# sourceMappingURL=dicontainer.js.map