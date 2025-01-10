"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Equals = void 0;
const attribute_service_1 = require("../model/column/attribute-service");
function Equals(value) {
    return (target, propertyName) => (0, attribute_service_1.addAttributeOptions)(target, propertyName, {
        validate: {
            equals: value,
        },
    });
}
exports.Equals = Equals;
//# sourceMappingURL=equals.js.map