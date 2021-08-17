declare type Key = string | number | symbol;
export declare function reverseRecord<A extends Key, B extends Key>(record: Record<A, B>): Partial<Record<B, A>>;
export declare function findKey<A extends Key, B extends Key>(record: Record<A, B>, predicate: (b: B) => boolean): A | undefined;
export {};
