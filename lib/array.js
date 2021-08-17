"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zipToRecord = exports.zip = void 0;
/**
 * Zips two arrays
 *
 * @param as Array to zip on the left hand side of each entry
 * @param bs Array to zip on the right hand side of each entry
 * @returns A zipped entry array
 */
function zip(as, bs) {
    return as.slice(0, bs.length).map((a, i) => [a, bs[i]]);
}
exports.zip = zip;
/**
 * Zips two arrays into a record
 *
 * @param as Array to use as record keys
 * @param bs Array to use as record values
 * @returns A zipped entry record
 */
function zipToRecord(as, bs) {
    return zip(as, bs).reduce((acc, [a, b]) => (Object.assign(Object.assign({}, acc), { [a]: b })), {});
}
exports.zipToRecord = zipToRecord;
