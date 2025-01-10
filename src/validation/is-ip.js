"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsIP = void 0;
const attribute_service_1 = require("../model/column/attribute-service");
function IsIP(target, propertyName) {
    (0, attribute_service_1.addAttributeOptions)(target, propertyName, {
        validate: {
            isIP: true,
        },
    });
}
exports.IsIP = IsIP;
//# sourceMappingURL=is-ip.js.map