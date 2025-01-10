"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotIn = void 0;
const attribute_service_1 = require("../model/column/attribute-service");
function NotIn(arg) {
    return (target, propertyName) => (0, attribute_service_1.addAttributeOptions)(target, propertyName, {
        validate: {
            notIn: arg,
        },
    });
}
exports.NotIn = NotIn;
//# sourceMappingURL=not-in.js.map