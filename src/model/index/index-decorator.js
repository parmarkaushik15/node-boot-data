"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.annotateModelWithIndex = exports.Index = void 0;
const tslib_1 = require("tslib");
const index_service_1 = require("./index-service");
function Index(...args) {
    if (args.length >= 2) {
        const [target, propertyName] = args;
        annotateModelWithIndex(target, propertyName);
        return;
    }
    return (target, propertyName) => {
        annotateModelWithIndex(target, propertyName, args[0]);
    };
}
exports.Index = Index;
function annotateModelWithIndex(target, propertyName, optionsOrName = {}, indexId) {
    let indexOptions;
    let fieldOptions;
    if (typeof optionsOrName === 'string') {
        indexOptions = { name: optionsOrName };
        fieldOptions = { name: propertyName };
    }
    else {
        const { length, order, collate } = optionsOrName, rest = tslib_1.__rest(optionsOrName, ["length", "order", "collate"]);
        indexOptions = rest;
        fieldOptions = {
            name: propertyName,
            length,
            order,
            collate,
        };
    }
    return (0, index_service_1.addFieldToIndex)(target, fieldOptions, indexOptions, indexId);
}
exports.annotateModelWithIndex = annotateModelWithIndex;
//# sourceMappingURL=index-decorator.js.map