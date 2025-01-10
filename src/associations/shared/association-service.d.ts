import 'reflect-metadata';
import { BelongsToOptions, HasOneOptions, HasManyOptions, ManyToManyOptions } from 'sequelize';
import { BaseAssociation } from './base-association';
export type NonBelongsToManyAssociationOptions = BelongsToOptions | HasManyOptions | HasOneOptions | ManyToManyOptions;
export declare function getPreparedAssociationOptions(optionsOrForeignKey?: string | NonBelongsToManyAssociationOptions): NonBelongsToManyAssociationOptions;
export declare function addAssociation<TCreationAttributes extends {}, TModelAttributes extends {}>(target: any, association: BaseAssociation<TCreationAttributes, TModelAttributes>): void;
export declare function getAssociations<TCreationAttributes extends {}, TModelAttributes extends {}>(target: any): any[] | undefined;
export declare function setAssociations<TCreationAttributes extends {}, TModelAttributes extends {}>(target: any, associations: BaseAssociation<TCreationAttributes, TModelAttributes>[]): void;
export declare function getAssociationsByRelation<TCreationAttributes extends {}, TModelAttributes extends {}>(target: any, relatedClass: any): BaseAssociation<TCreationAttributes, TModelAttributes>[];
