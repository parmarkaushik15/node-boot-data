import { DataTypeAbstract, ModelOptions } from 'sequelize';
export declare function setModelName(target: any, modelName: string): void;
export declare function getModelName(target: any): string;
export declare function getOptions(target: any): ModelOptions | undefined;
export declare function setOptions(target: any, options: ModelOptions<any>): void;
export declare function addOptions(target: any, options: ModelOptions<any>): void;
export declare function getSequelizeTypeByDesignType(target: any, propertyName: string): DataTypeAbstract;
export declare function resolveModelGetter(options: any): any;
