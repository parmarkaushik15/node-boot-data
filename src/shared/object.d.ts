export declare function deepAssign<T, S1, S2, S3>(target: T, source1: S1, source2: S2, source3: S3): T & S1 & S2 & S3;
export declare function deepAssign<T, S1, S2>(target: T, source1: S1, source2: S2): T & S1 & S2;
export declare function deepAssign<T, S>(target: T, source: S): T & S;
export declare function deepAssign<S>(target: {}, source: S): S;
export declare function cloneRegExp(input: RegExp, injectFlags?: string): RegExp;
export declare function getAllPropertyNames(obj: any): string[];
