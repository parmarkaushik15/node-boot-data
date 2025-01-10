"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFieldToIndex = exports.setIndexes = exports.getIndexes = void 0;
require("reflect-metadata");
const INDEXES_KEY = 'sequelize:indexes';
function getIndexes(target) {
    const { named = {}, unnamed = [] } = Reflect.getMetadata(INDEXES_KEY, target) || {};
    return { named: Object.assign({}, named), unnamed: [...unnamed] };
}
exports.getIndexes = getIndexes;
function setIndexes(target, indexes) {
    Reflect.defineMetadata(INDEXES_KEY, indexes, target);
}
exports.setIndexes = setIndexes;
function addFieldToIndex(target, fieldOptions, indexOptions, indexId) {
    const indexes = getIndexes(target);
    const chosenId = typeof indexId !== 'undefined' ? indexId : indexOptions.name || indexes.unnamed.length;
    const indexStore = typeof chosenId === 'string' ? indexes.named : indexes.unnamed;
    if (!indexStore[chosenId])
        indexStore[chosenId] = Object.assign({}, indexOptions);
    const index = indexStore[chosenId];
    if (!index.fields)
        index.fields = [];
    index.fields.push(fieldOptions);
    setIndexes(target, indexes);
    return chosenId;
}
exports.addFieldToIndex = addFieldToIndex;
//# sourceMappingURL=index-service.js.map