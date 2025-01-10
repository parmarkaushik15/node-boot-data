import { ModelMatch, SequelizeOptions } from './sequelize-options';
import { ModelCtor } from '../../model/model/model';
export declare function prepareOptions(options: SequelizeOptions): SequelizeOptions;
export declare function prepareArgs(...args: any[]): {
    preparedArgs: any[];
    options?: SequelizeOptions;
};
export declare function getModels(arg: (ModelCtor | string)[], modelMatch: ModelMatch): ModelCtor[];
