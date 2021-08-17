
type Key = string | number | symbol

/**
 * Creates a new record with associated keys and values swapped
 * 
 * @param record The record to reverse
 * @returns A new record with associated keys and values swapped
 */
export function reverseRecord<A extends Key, B extends Key>(
  record: Record<A, B>
): Partial<Record<B, A>> {
  return Object.entries(record)
    .reduce((p, [str, val]) => ({ 
      ...p,
      [val as B]: str,
    }), {} as Record<B, A>)
}

/**
 * Searches through a `record` to find the key of a value that matches the `predicate`
 * 
 * @param record The record to search through
 * @param predicate The predicate used to find a matching value
 * @returns The key of the first value that matches the `predicate`
 */
export function findKey<A extends Key, B extends Key>(
  record: Record<A, B>, 
  predicate: (b: B) => boolean
): A | undefined {
  for (const a in record) {
    if (predicate(record[a])) return a
  }
  return undefined
}