"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findKey = exports.reverseRecord = void 0;
function reverseRecord(record) {
    return Object.entries(record)
        .reduce((p, [str, val]) => (Object.assign(Object.assign({}, p), { [val]: str })), {});
}
exports.reverseRecord = reverseRecord;
function findKey(record, predicate) {
    for (const a in record) {
        if (predicate(record[a]))
            return a;
    }
    return undefined;
}
exports.findKey = findKey;
