"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoIncrement = void 0;
const attribute_service_1 = require("../attribute-service");
function AutoIncrement(target, propertyName) {
    (0, attribute_service_1.addAttributeOptions)(target, propertyName, {
        autoIncrement: true,
    });
}
exports.AutoIncrement = AutoIncrement;
//# sourceMappingURL=auto-increment.js.map