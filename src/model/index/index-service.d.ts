import 'reflect-metadata';
import { IndexesOptions as SequelizeIndexOptions } from 'sequelize';
export interface IndexFieldOptions {
    name: string;
    length?: number;
    order?: 'ASC' | 'DESC';
    collate?: string;
}
export interface IndexesMeta {
    named: {
        [name: string]: IndexOptions;
    };
    unnamed: IndexOptions[];
}
export type IndexOptions = Pick<SequelizeIndexOptions, Exclude<keyof SequelizeIndexOptions, 'fields'>>;
export declare function getIndexes(target: any): IndexesMeta;
export declare function setIndexes(target: any, indexes: IndexesMeta): void;
export declare function addFieldToIndex(target: any, fieldOptions: IndexFieldOptions, indexOptions: IndexOptions, indexId?: string | number): string | number;
