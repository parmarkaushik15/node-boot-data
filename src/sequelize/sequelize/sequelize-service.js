"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getModels = exports.prepareArgs = exports.prepareOptions = void 0;
const path_1 = require("path");
const glob = require("glob");
const array_1 = require("../../shared/array");
function prepareOptions(options) {
    if (options.validateOnly) {
        return getValidationOnlyOptions(options);
    }
    return Object.assign({}, options);
}
exports.prepareOptions = prepareOptions;
function prepareArgs(...args) {
    const lastArg = args[args.length - 1];
    const options = lastArg && typeof lastArg === 'object' ? prepareOptions(lastArg) : undefined;
    if (options) {
        args[args.length - 1] = options;
    }
    return { preparedArgs: args, options };
}
exports.prepareArgs = prepareArgs;
function getValidationOnlyOptions(options) {
    return Object.assign(Object.assign({}, options), { dialect: 'sqlite', dialectModulePath: __dirname + '/../validation-only/db-dialect-dummy' });
}
function getModels(arg, modelMatch) {
    const hasSupportedExtension = (path) => ['.ts', '.js'].indexOf((0, path_1.extname)(path)) !== -1;
    if (arg && typeof arg[0] === 'string') {
        return arg.reduce((models, dir) => {
            if (!glob.hasMagic(dir) && !hasSupportedExtension(dir))
                dir = (0, path_1.join)(dir, '/*');
            const _models = glob
                .sync(dir)
                .filter(isImportable)
                .map(getFullfilepathWithoutExtension)
                .filter(array_1.uniqueFilter)
                .map((fullPath) => {
                const module = require(fullPath);
                const fileName = (0, path_1.basename)(fullPath);
                const matchedMemberKey = Object.keys(module).find((m) => modelMatch(fileName, m));
                const matchedMember = matchedMemberKey ? module[matchedMemberKey] : undefined;
                if (!matchedMember && !module.default) {
                    throw new Error(`No default export defined for file "${fileName}" or ` +
                        `export does not satisfy filename.`);
                }
                return matchedMember || module.default;
            });
            models.push(..._models);
            return models;
        }, []);
    }
    return arg;
}
exports.getModels = getModels;
function isImportable(file) {
    const filePart = file.slice(-3);
    return filePart === '.js' || (filePart === '.ts' && file.slice(-5) !== '.d.ts');
}
function getFullfilepathWithoutExtension(file) {
    const parsedFile = (0, path_1.parse)(file);
    return (0, path_1.join)(parsedFile.dir, parsedFile.name);
}
//# sourceMappingURL=sequelize-service.js.map