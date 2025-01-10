"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniqueFilter = exports.unique = void 0;
function unique(arr) {
    return arr.filter(exports.uniqueFilter);
}
exports.unique = unique;
const uniqueFilter = (item, index, arr) => arr.indexOf(item) === index;
exports.uniqueFilter = uniqueFilter;
//# sourceMappingURL=array.js.map