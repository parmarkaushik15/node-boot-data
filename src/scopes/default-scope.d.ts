import { ScopeFindOptions } from './scope-find-options';
import { DefaultScopeGetter } from './scope-options';
export declare function DefaultScope(scopeGetter: DefaultScopeGetter): Function;
export declare function DefaultScope<TCreationAttributes extends {}, TModelAttributes extends {}>(scope: ScopeFindOptions<TCreationAttributes, TModelAttributes>): Function;
