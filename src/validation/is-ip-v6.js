"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsIPv6 = void 0;
const attribute_service_1 = require("../model/column/attribute-service");
function IsIPv6(target, propertyName) {
    (0, attribute_service_1.addAttributeOptions)(target, propertyName, {
        validate: {
            isIPv6: true,
        },
    });
}
exports.IsIPv6 = IsIPv6;
//# sourceMappingURL=is-ip-v6.js.map