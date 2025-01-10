"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INFER_ALIAS_MAP = exports.Model = void 0;
const sequelize_1 = require("sequelize");
const string_1 = require("../../shared/string");
const alias_inference_service_1 = require("../../associations/alias-inference/alias-inference-service");
const model_not_initialized_error_1 = require("../shared/model-not-initialized-error");
const object_1 = require("../../shared/object");
class Model extends sequelize_1.Model {
    static initialize(attributes, options) {
        this.isInitialized = true;
        return super.init(attributes, options);
    }
    constructor(values, options) {
        if (!new.target.isInitialized) {
            throw new model_not_initialized_error_1.ModelNotInitializedError(new.target, `${new.target.name} cannot be instantiated.`);
        }
        super(values, (0, alias_inference_service_1.inferAlias)(options, new.target));
    }
    $add(propertyKey, instances, options) {
        return this['add' + (0, string_1.capitalize)(propertyKey)](instances, options);
    }
    $set(propertyKey, instances, options) {
        return this['set' + (0, string_1.capitalize)(propertyKey)](instances, options);
    }
    $get(propertyKey, options) {
        return this['get' + (0, string_1.capitalize)(propertyKey)](options);
    }
    $count(propertyKey, options) {
        return this['count' + (0, string_1.capitalize)(propertyKey)](options);
    }
    $create(propertyKey, values, options) {
        return this['create' + (0, string_1.capitalize)(propertyKey)](values, options);
    }
    $has(propertyKey, instances, options) {
        return this['has' + (0, string_1.capitalize)(propertyKey)](instances, options);
    }
    $remove(propertyKey, instances, options) {
        return this['remove' + (0, string_1.capitalize)(propertyKey)](instances, options);
    }
    reload(options) {
        return super.reload((0, alias_inference_service_1.inferAlias)(options, this));
    }
}
exports.Model = Model;
Model.isInitialized = false;
exports.INFER_ALIAS_MAP = {
    bulkBuild: 1,
    build: 1,
    create: 1,
    aggregate: 2,
    all: 0,
    find: 0,
    findAll: 0,
    findAndCount: 0,
    findAndCountAll: 0,
    findById: 1,
    findByPrimary: 1,
    findCreateFind: 0,
    findOne: 0,
    findOrBuild: 0,
    findOrCreate: 0,
    findOrInitialize: 0,
    reload: 0,
};
const staticModelFunctionProperties = (0, object_1.getAllPropertyNames)(sequelize_1.Model).filter((key) => !isForbiddenMember(key) && isFunctionMember(key, sequelize_1.Model) && !isPrivateMember(key));
function isFunctionMember(propertyKey, target) {
    return typeof target[propertyKey] === 'function';
}
function isForbiddenMember(propertyKey) {
    const FORBIDDEN_KEYS = [
        'name',
        'constructor',
        'length',
        'prototype',
        'caller',
        'arguments',
        'apply',
        'queryInterface',
        'queryGenerator',
        'init',
        'replaceHookAliases',
        'refreshAttributes',
        'inspect',
    ];
    return FORBIDDEN_KEYS.indexOf(propertyKey) !== -1;
}
function isPrivateMember(propertyKey) {
    return propertyKey.charAt(0) === '_';
}
function addThrowNotInitializedProxy() {
    staticModelFunctionProperties.forEach((key) => {
        const superFn = Model[key];
        Model[key] = function (...args) {
            if (!this.isInitialized) {
                throw new model_not_initialized_error_1.ModelNotInitializedError(this, `Member "${key}" cannot be called.`);
            }
            return superFn.call(this, ...args);
        };
    });
}
function addInferAliasOverrides() {
    Object.keys(exports.INFER_ALIAS_MAP).forEach((key) => {
        const optionIndex = exports.INFER_ALIAS_MAP[key];
        const superFn = Model[key];
        Model[key] = function (...args) {
            args[optionIndex] = (0, alias_inference_service_1.inferAlias)(args[optionIndex], this);
            return superFn.call(this, ...args);
        };
    });
}
addThrowNotInitializedProxy();
addInferAliasOverrides();
//# sourceMappingURL=model.js.map