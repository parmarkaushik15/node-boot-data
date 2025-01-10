"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsAlphanumeric = void 0;
const attribute_service_1 = require("../model/column/attribute-service");
function IsAlphanumeric(target, propertyName) {
    (0, attribute_service_1.addAttributeOptions)(target, propertyName, {
        validate: {
            isAlphanumeric: true,
        },
    });
}
exports.IsAlphanumeric = IsAlphanumeric;
//# sourceMappingURL=is-alphanumeric.js.map