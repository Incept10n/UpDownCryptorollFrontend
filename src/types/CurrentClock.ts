export class CurrentClock {
    totalSeconds: number;

    constructor(totalSeconds: number) {
        this.totalSeconds = totalSeconds;
    }

    getHours(): number {
        return Math.floor(this.totalSeconds / 3600);
    }

    getMinutes(): number {
        return Math.floor((this.totalSeconds % 3600) / 60);
    }

    getSeconds(): number {
        return Math.floor(this.totalSeconds % 60);
    }

    decrementByOneSecond(): void {
        if (this.totalSeconds > 0) {
            this.totalSeconds -= 0.5;
        } else {
            this.totalSeconds = 0;
        }
    }

    // display time in "HH:MM:SS" format
    toTimeString(): string {
        const hours = String(this.getHours()).padStart(2, "0");
        const minutes = String(this.getMinutes()).padStart(2, "0");
        const seconds = String(this.getSeconds()).padStart(2, "0");
        return `${hours}:${minutes}:${seconds}`;
    }

    static fromTimeString(timeString: string): CurrentClock {
        const [hours, minutes, seconds] = timeString.split(":").map(Number);
        const totalSeconds = hours * 3600 + minutes * 60 + seconds;
        return new CurrentClock(totalSeconds);
    }
}
