"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findKey = exports.reverseRecord = void 0;
/**
 * Creates a new record with associated keys and values swapped
 *
 * @param record The record to reverse
 * @returns A new record with associated keys and values swapped
 */
function reverseRecord(record) {
    return Object.entries(record)
        .reduce((p, [str, val]) => (Object.assign(Object.assign({}, p), { [val]: str })), {});
}
exports.reverseRecord = reverseRecord;
/**
 * Searches through a `record` to find the key of a value that matches the `predicate`
 *
 * @param record The record to search through
 * @param predicate The predicate used to find a matching value
 * @returns The key of the first value that matches the `predicate`
 */
function findKey(record, predicate) {
    for (const a in record) {
        if (predicate(record[a]))
            return a;
    }
    return undefined;
}
exports.findKey = findKey;
