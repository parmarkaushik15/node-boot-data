import { DataType, DataTypeAbstract } from 'sequelize';
export declare function isDataType(value: any): value is DataType;
export declare function inferDataType(designType: any): DataTypeAbstract | undefined;
