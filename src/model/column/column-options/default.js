"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const attribute_service_1 = require("../attribute-service");
function Default(value) {
    return (target, propertyName) => {
        (0, attribute_service_1.addAttributeOptions)(target, propertyName, {
            defaultValue: value,
        });
    };
}
exports.Default = Default;
//# sourceMappingURL=default.js.map