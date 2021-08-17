"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = void 0;
const luxon_1 = require("luxon");
class Timer {
    constructor() {
        this.start = luxon_1.DateTime.local();
    }
    static startTimer() {
        return new Timer();
    }
    elapsed() {
        if (this.end) {
            return luxon_1.Interval.fromDateTimes(this.start, this.end).toDuration();
        }
        return luxon_1.Interval.fromDateTimes(this.start, luxon_1.DateTime.local()).toDuration();
    }
    restartTimer() {
        this.start = luxon_1.DateTime.local();
        this.end = undefined;
    }
    endTimer() {
        this.end = luxon_1.DateTime.local();
        return this.elapsed();
    }
}
exports.Timer = Timer;
