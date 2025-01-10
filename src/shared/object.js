"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPropertyNames = exports.cloneRegExp = exports.deepAssign = void 0;
function deepAssign(target, ...sources) {
    sources.forEach((source) => {
        Object.getOwnPropertyNames(source).forEach((key) => assign(key, target, source));
        if (Object.getOwnPropertySymbols) {
            Object.getOwnPropertySymbols(source).forEach((key) => assign(key, target, source));
        }
    });
    return target;
    function assign(key, _target, _source) {
        const sourceValue = _source[key];
        if (sourceValue !== void 0) {
            let targetValue = _target[key];
            if (Array.isArray(sourceValue)) {
                if (!Array.isArray(targetValue)) {
                    targetValue = [];
                }
                const length = targetValue.length;
                sourceValue.forEach((_, index) => assign(length + index, targetValue, sourceValue));
            }
            else if (typeof sourceValue === 'object') {
                if (sourceValue instanceof RegExp) {
                    targetValue = cloneRegExp(sourceValue);
                }
                else if (sourceValue instanceof Date) {
                    targetValue = new Date(sourceValue);
                }
                else if (sourceValue === null) {
                    targetValue = null;
                }
                else {
                    if (!targetValue) {
                        targetValue = Object.create(sourceValue.constructor.prototype);
                    }
                    deepAssign(targetValue, sourceValue);
                }
            }
            else {
                targetValue = sourceValue;
            }
            _target[key] = targetValue;
        }
    }
}
exports.deepAssign = deepAssign;
function cloneRegExp(input, injectFlags) {
    const pattern = input.source;
    let flags = '';
    injectFlags = injectFlags || '';
    if (input.global || /g/i.test(injectFlags)) {
        flags += 'g';
    }
    if (input.ignoreCase || /i/i.test(injectFlags)) {
        flags += 'i';
    }
    if (input.multiline || /m/i.test(injectFlags)) {
        flags += 'm';
    }
    return new RegExp(pattern, flags);
}
exports.cloneRegExp = cloneRegExp;
function getAllPropertyNames(obj) {
    const names = [];
    const exists = {};
    do {
        names.push.apply(names, Object.getOwnPropertyNames(obj));
        obj = Object.getPrototypeOf(obj);
    } while (obj !== Object.prototype);
    return names.filter((name) => {
        const isValid = !exists[name] && name !== 'constructor';
        exists[name] = true;
        return isValid;
    });
}
exports.getAllPropertyNames = getAllPropertyNames;
//# sourceMappingURL=object.js.map