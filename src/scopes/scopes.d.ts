import { ScopeTableOptions } from './scope-table-options';
import { ScopesOptionsGetter } from './scope-options';
export declare function Scopes(scopesGetter: ScopesOptionsGetter): Function;
export declare function Scopes<TCreationAttributes extends {}, TModelAttributes extends {}>(scopes: ScopeTableOptions<TCreationAttributes, TModelAttributes>): Function;
