import { Model, ModelOptions } from 'sequelize';
export interface TableOptions<M extends Model = Model> extends ModelOptions<M> {
    modelName?: string;
    version?: boolean | string;
}
