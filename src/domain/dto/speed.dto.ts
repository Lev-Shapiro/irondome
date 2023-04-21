import { DistanceUnit, TimeUnit } from "enum";

export class SpeedDto {
    constructor(
        public readonly timeAmount: number,
        public readonly timeUnit: TimeUnit,
        public readonly distanceAmount: number,
        public readonly distanceUnit: DistanceUnit
    ) {}

    get pixelsPerMillisecond(): number {
        const time = this.timeAmount * this.timeUnit;
        const distance = this.distanceAmount * this.distanceUnit;

        return distance / time;
    }
}
