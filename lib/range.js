"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRange = exports.range = void 0;
/**
 * Creates a range of numbers
 *
 * @param startInclusive Start number
 * @param endInclusive End number
 * @param step The step between numbers in the range. Defaults to `1`
 * @returns A range of numbers
 */
function range(startInclusive, endInclusive, step = 1) {
    const range = [];
    for (let i = startInclusive; i <= endInclusive; i += step) {
        range.push(i);
    }
    return range;
}
exports.range = range;
/**
 * Generates a sized range of elements
 *
 * @param count The number of elements to generate
 * @param generator The generator function to create elements
 * @returns A range of elements
 */
function generateRange(count, generator) {
    return range(1, count).map(i => generator(i));
}
exports.generateRange = generateRange;
