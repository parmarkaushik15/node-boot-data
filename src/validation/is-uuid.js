"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsUUID = void 0;
const attribute_service_1 = require("../model/column/attribute-service");
function IsUUID(version) {
    return (target, propertyName) => (0, attribute_service_1.addAttributeOptions)(target, propertyName, {
        validate: {
            isUUID: version,
        },
    });
}
exports.IsUUID = IsUUID;
//# sourceMappingURL=is-uuid.js.map