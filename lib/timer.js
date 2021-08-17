"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = void 0;
const luxon_1 = require("luxon");
class Timer {
    constructor() {
        this.start = luxon_1.DateTime.local();
    }
    /**
     * Create and start a new timer
     *
     * @returns A new timer that has been started
     */
    static startTimer() {
        return new Timer();
    }
    /**
     * The elapsed duration
     */
    get elapsed() {
        if (this.end) {
            return luxon_1.Interval.fromDateTimes(this.start, this.end).toDuration();
        }
        return luxon_1.Interval.fromDateTimes(this.start, luxon_1.DateTime.local()).toDuration();
    }
    /**
     * Restart the timer
     */
    restartTimer() {
        this.start = luxon_1.DateTime.local();
        this.end = undefined;
    }
    /**
     * End the timer and get the elapsed duration
     *
     * @returns The elapsed duration from when the timer started to now
     */
    endTimer() {
        this.end = luxon_1.DateTime.local();
        return this.elapsed;
    }
}
exports.Timer = Timer;
