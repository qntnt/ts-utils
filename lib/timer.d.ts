import { Duration } from "luxon";
export declare class Timer {
    private start;
    private end?;
    private constructor();
    /**
     * Create and start a new timer
     *
     * @returns A new timer that has been started
     */
    static startTimer(): Timer;
    /**
     * The elapsed duration
     */
    get elapsed(): Duration;
    /**
     * Restart the timer
     */
    restartTimer(): void;
    /**
     * End the timer and get the elapsed duration
     *
     * @returns The elapsed duration from when the timer started to now
     */
    endTimer(): Duration;
}
