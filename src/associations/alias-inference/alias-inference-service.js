"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inferAlias = void 0;
const association_service_1 = require("../shared/association-service");
function inferAlias(options, source) {
    options = Object.assign({}, options);
    if (!options.include) {
        return options;
    }
    if (!Array.isArray(options.include)) {
        options.include = [options.include];
    }
    else if (!options.include.length) {
        delete options.include;
        return options;
    }
    options.include = options.include.map((include) => {
        include = inferAliasForInclude(include, source);
        return include;
    });
    return options;
}
exports.inferAlias = inferAlias;
function inferAliasForInclude(include, source) {
    const hasModelOptionWithoutAsOption = !!(include.model && !include.as);
    const hasIncludeOptions = !!include.include;
    const isConstructorFn = include instanceof Function;
    if (isConstructorFn || hasModelOptionWithoutAsOption) {
        if (isConstructorFn) {
            include = { model: include };
        }
        const targetPrototype = source.prototype || source;
        const relatedClass = include.model;
        const associations = (0, association_service_1.getAssociationsByRelation)(targetPrototype, relatedClass);
        if (associations.length > 0) {
            if (associations.length > 1) {
                throw new Error(`Alias cannot be inferred: "${source.name}" has multiple ` +
                    `relations with "${include.model.name}"`);
            }
            include.as = associations[0].getAs();
        }
    }
    if (!isConstructorFn && hasIncludeOptions) {
        include = inferAlias(include, include.model);
    }
    return include;
}
//# sourceMappingURL=alias-inference-service.js.map