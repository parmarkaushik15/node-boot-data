import { Options } from 'sequelize';
import { ModelCtor } from '../../model/model/model';
export type ModelMatch = (filename: string, member: string) => boolean;
export interface SequelizeOptions extends Options {
    models?: string[] | ModelCtor[];
    modelPaths?: string[];
    modelMatch?: ModelMatch;
    repositoryMode?: boolean;
    validateOnly?: boolean;
}
