
/**
 * Zips two arrays
 * 
 * @param as Array to zip on the left hand side of each entry
 * @param bs Array to zip on the right hand side of each entry
 * @returns A zipped entry array
 */
export function zip<A, B>(as: A[], bs: B[]): [A, B][] {
  return as.slice(0, bs.length).map((a, i) => [a, bs[i]])
}

/**
 * Zips two arrays into a record
 * 
 * @param as Array to use as record keys
 * @param bs Array to use as record values
 * @returns A zipped entry record
 */
export function zipToRecord<A extends string | number | symbol, B>(as: A[], bs: B[]): Partial<Record<A, B>> {
  return zip(as, bs).reduce((acc, [a, b]) => ({ 
    ...acc,
    [a]: b,
  }), {} as Partial<Record<A, B>>)
}