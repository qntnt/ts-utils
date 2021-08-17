export declare type Range<T> = T[];
/**
 * Creates a range of numbers
 *
 * @param startInclusive Start number
 * @param endInclusive End number
 * @param step The step between numbers in the range. Defaults to `1`
 * @returns A range of numbers
 */
export declare function range(startInclusive: number, endInclusive: number, step?: number): Range<number>;
/**
 * Generates a sized range of elements
 *
 * @param count The number of elements to generate
 * @param generator The generator function to create elements
 * @returns A range of elements
 */
export declare function generateRange<T>(count: number, generator: (position: number) => T): Range<T>;
