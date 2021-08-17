"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffled = void 0;
const seedrandom_1 = __importDefault(require("seedrandom"));
/**
 * Immutably shuffles an array
 *
 * @param array The array to shuffle
 * @param seed A random seed to use
 * @returns The shuffled copy of the input array
 */
function shuffled(array, seed) {
    const random = seed ? seedrandom_1.default(seed) : seedrandom_1.default();
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(random() * (i + 1));
        const temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
    }
    return shuffled;
}
exports.shuffled = shuffled;
