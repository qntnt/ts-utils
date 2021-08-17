export declare type Range<T> = T[];
export declare function range(start: number, end: number): Range<number>;
export declare function generateRange<T>(start: number, end: number, gen: (position: number) => T): Range<T>;
