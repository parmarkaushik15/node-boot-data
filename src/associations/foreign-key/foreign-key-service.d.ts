import { ForeignKeyOptions } from 'sequelize';
import { ForeignKeyMeta } from './foreign-key-meta';
import { ModelType } from '../../model/model/model';
export declare function getForeignKeyOptions<TCreationAttributes extends {}, TModelAttributes extends {}, TCreationAttributesThrough extends {}, TModelAttributesThrough extends {}>(relatedClass: any, classWithForeignKey?: ModelType<TCreationAttributesThrough, TModelAttributesThrough>, foreignKey?: string | ForeignKeyOptions): ForeignKeyOptions;
export declare function addForeignKey<TCreationAttributes extends {}, TModelAttributes extends {}>(target: any, relatedClassGetter: any, foreignKey: string): void;
export declare function getForeignKeys<TCreationAttributes extends {}, TModelAttributes extends {}>(target: any): ForeignKeyMeta<TCreationAttributes, TModelAttributes>[] | undefined;
