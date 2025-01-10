export declare function Is(name: string, validator: (value: any) => any): Function;
export declare function Is(validator: (value: any) => any): Function;
export declare function Is(arg: string | (string | RegExp)[] | RegExp | {
    msg: string;
    args: string | (string | RegExp)[] | RegExp;
}): Function;
