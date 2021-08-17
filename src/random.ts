import seedrandom from 'seedrandom'

/**
 * Immutably shuffles an array
 * 
 * @param array The array to shuffle
 * @param seed A random seed to use
 * @returns The shuffled copy of the input array
 */
export function shuffled<T>(array: T[], seed?: string): T[] {
  const random = seed ? seedrandom(seed) : seedrandom()
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1))
      const temp = shuffled[i]
      shuffled[i] = shuffled[j]
      shuffled[j] = temp
  }
  return shuffled
}
