
type Key = string | number | symbol

export function reverseRecord<A extends Key, B extends Key>(
  record: Record<A, B>
): Partial<Record<B, A>> {
  return Object.entries(record)
    .reduce((p, [str, val]) => ({ 
      ...p,
      [val as B]: str,
    }), {} as Record<B, A>)
}

export function findKey<A extends Key, B extends Key>(
  record: Record<A, B>, 
  predicate: (b: B) => boolean
): A | undefined {
  for (const a in record) {
    if (predicate(record[a])) return a
  }
  return undefined
}