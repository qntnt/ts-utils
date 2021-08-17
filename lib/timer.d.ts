import { Duration } from "luxon";
export declare class Timer {
    private start;
    private end?;
    private constructor();
    static startTimer(): Timer;
    elapsed(): Duration;
    restartTimer(): void;
    endTimer(): Duration;
}
