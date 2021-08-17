declare type Key = string | number | symbol;
/**
 * Creates a new record with associated keys and values swapped
 *
 * @param record The record to reverse
 * @returns A new record with associated keys and values swapped
 */
export declare function reverseRecord<A extends Key, B extends Key>(record: Record<A, B>): Partial<Record<B, A>>;
/**
 * Searches through a `record` to find the key of a value that matches the `predicate`
 *
 * @param record The record to search through
 * @param predicate The predicate used to find a matching value
 * @returns The key of the first value that matches the `predicate`
 */
export declare function findKey<A extends Key, B extends Key>(record: Record<A, B>, predicate: (b: B) => boolean): A | undefined;
export {};
