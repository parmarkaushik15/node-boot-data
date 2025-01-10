import { InitOptions, Model as OriginModel, ModelAttributes, FindOptions, BuildOptions, Utils } from 'sequelize';
import { AssociationGetOptions } from './association/association-get-options';
import { AssociationCountOptions } from './association/association-count-options';
import { AssociationActionOptions } from './association/association-action-options';
import { AssociationCreateOptions } from './association/association-create-options';
import { Repository } from '../../sequelize/repository/repository';
export type ModelType<TCreationAttributes extends {}, TModelAttributes extends {}> = new (values?: TCreationAttributes, options?: any) => Model<TModelAttributes, TCreationAttributes>;
export type ModelCtor<M extends Model = Model> = Repository<M>;
export type ModelStatic<M extends Model = Model> = {
    new (): M;
};
export type $GetType<T> = NonNullable<T> extends any[] ? NonNullable<T> : NonNullable<T> | null;
export declare abstract class Model<TModelAttributes extends {} = any, TCreationAttributes extends {} = TModelAttributes> extends OriginModel<TModelAttributes, TCreationAttributes> {
    id?: number | any;
    createdAt?: Date | any;
    updatedAt?: Date | any;
    deletedAt?: Date | any;
    version?: number | any;
    static isInitialized: boolean;
    static initialize<MS extends ModelStatic<Model>, M extends InstanceType<MS>>(attributes: ModelAttributes, options: InitOptions): MS;
    constructor(values?: Utils.MakeNullishOptional<TCreationAttributes>, options?: BuildOptions);
    $add<R extends Model>(propertyKey: string, instances: R | R[] | string[] | string | number[] | number, options?: AssociationActionOptions): Promise<unknown>;
    $set<R extends Model>(propertyKey: keyof this, instances: R | R[] | string[] | string | number[] | number | null, options?: AssociationActionOptions): Promise<any>;
    $get<K extends keyof this>(propertyKey: K, options?: AssociationGetOptions): Promise<$GetType<this[K]>>;
    $count(propertyKey: string, options?: AssociationCountOptions): Promise<number>;
    $create<R extends Model>(propertyKey: string, values: any, options?: AssociationCreateOptions): Promise<R>;
    $has<R extends Model>(propertyKey: string, instances: R | R[] | string[] | string | number[] | number, options?: AssociationGetOptions): Promise<boolean>;
    $remove<R extends Model>(propertyKey: string, instances: R | R[] | string[] | string | number[] | number, options?: any): Promise<any>;
    reload(options?: FindOptions): Promise<this>;
}
export declare const INFER_ALIAS_MAP: any;
