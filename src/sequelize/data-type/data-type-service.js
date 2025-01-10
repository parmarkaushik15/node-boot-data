"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inferDataType = exports.isDataType = void 0;
const sequelize_1 = require("sequelize");
function isDataType(value) {
    return (typeof value === 'string' ||
        (typeof value === 'function' && value({}) instanceof sequelize_1.DataTypes.ABSTRACT) ||
        value instanceof sequelize_1.DataTypes.ABSTRACT);
}
exports.isDataType = isDataType;
function inferDataType(designType) {
    switch (designType) {
        case String:
            return sequelize_1.DataTypes.STRING;
        case BigInt:
            return sequelize_1.DataTypes.BIGINT;
        case Number:
            return sequelize_1.DataTypes.INTEGER;
        case Boolean:
            return sequelize_1.DataTypes.BOOLEAN;
        case Date:
            return sequelize_1.DataTypes.DATE;
        case Buffer:
            return sequelize_1.DataTypes.BLOB;
        default:
            return void 0;
    }
}
exports.inferDataType = inferDataType;
//# sourceMappingURL=data-type-service.js.map