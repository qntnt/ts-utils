
export type Range<T> = T[]

export function range(start: number, end: number): Range<number> {
  return Array.from({ length: end - start }, (_, key) => key + start)
}

export function generateRange<T>(start: number, end: number, gen: (position: number) => T): Range<T> {
  return range(start, end).map(i => gen(i))
}
