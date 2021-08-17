import { DateTime, Duration, Interval } from "luxon"

export class Timer {
    private start: DateTime
    private end?: DateTime

    private constructor() {
        this.start = DateTime.local()
    }

    /**
     * Create and start a new timer
     * 
     * @returns A new timer that has been started
     */
    static startTimer(): Timer {
        return new Timer()
    }

    /**
     * The elapsed duration
     */
    get elapsed(): Duration {
        if (this.end) {
            return Interval.fromDateTimes(this.start, this.end).toDuration()
        }
        return Interval.fromDateTimes(this.start, DateTime.local()).toDuration()
    }

    /**
     * Restart the timer
     */
    restartTimer(): void {
        this.start = DateTime.local()
        this.end = undefined
    }

    /**
     * End the timer and get the elapsed duration
     * 
     * @returns The elapsed duration from when the timer started to now
     */
    endTimer(): Duration {
        this.end = DateTime.local()
        return this.elapsed
    }
}
