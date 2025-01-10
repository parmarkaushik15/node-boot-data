type UniqueOptions = boolean | string | {
    name: string;
    msg: string;
};
export declare function Unique(options: UniqueOptions): Function;
export declare function Unique(target: Object, propertyName: string): void;
export {};
