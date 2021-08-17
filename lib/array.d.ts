/**
 * Zips two arrays
 *
 * @param as Array to zip on the left hand side of each entry
 * @param bs Array to zip on the right hand side of each entry
 * @returns A zipped entry array
 */
export declare function zip<A, B>(as: A[], bs: B[]): [A, B][];
/**
 * Zips two arrays into a record
 *
 * @param as Array to use as record keys
 * @param bs Array to use as record values
 * @returns A zipped entry record
 */
export declare function zipToRecord<A extends string | number | symbol, B>(as: A[], bs: B[]): Partial<Record<A, B>>;
