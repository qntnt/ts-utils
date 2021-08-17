"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRange = exports.range = void 0;
function range(start, end) {
    return Array.from({ length: end - start }, (_, key) => key + start);
}
exports.range = range;
function generateRange(start, end, gen) {
    return range(start, end).map(i => gen(i));
}
exports.generateRange = generateRange;
