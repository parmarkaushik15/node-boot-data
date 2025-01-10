import { ModelAttributeColumnOptions } from 'sequelize';
export declare function getAttributes(target: any): any | undefined;
export declare function setAttributes(target: any, attributes: any): void;
export declare function addAttribute(target: any, name: string, options: any): void;
export declare function addAttributeOptions(target: any, propertyName: string, options: Partial<ModelAttributeColumnOptions>): void;
