"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAttributeOptions = exports.addAttribute = exports.setAttributes = exports.getAttributes = void 0;
const object_1 = require("../../shared/object");
const ATTRIBUTES_KEY = 'sequelize:attributes';
function getAttributes(target) {
    const attributes = Reflect.getMetadata(ATTRIBUTES_KEY, target);
    if (attributes) {
        return Object.keys(attributes).reduce((copy, key) => {
            copy[key] = Object.assign({}, attributes[key]);
            return copy;
        }, {});
    }
}
exports.getAttributes = getAttributes;
function setAttributes(target, attributes) {
    Reflect.defineMetadata(ATTRIBUTES_KEY, Object.assign({}, attributes), target);
}
exports.setAttributes = setAttributes;
function addAttribute(target, name, options) {
    let attributes = getAttributes(target);
    if (!attributes) {
        attributes = {};
    }
    attributes[name] = Object.assign({}, options);
    setAttributes(target, attributes);
}
exports.addAttribute = addAttribute;
function addAttributeOptions(target, propertyName, options) {
    const attributes = getAttributes(target);
    if (!attributes || !attributes[propertyName]) {
        throw new Error(`@Column annotation is missing for "${propertyName}" of class "${target.constructor.name}"` +
            ` or annotation order is wrong.`);
    }
    attributes[propertyName] = (0, object_1.deepAssign)(attributes[propertyName], options);
    setAttributes(target, attributes);
}
exports.addAttributeOptions = addAttributeOptions;
//# sourceMappingURL=attribute-service.js.map