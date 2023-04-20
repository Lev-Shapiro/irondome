import { DistanceUnit } from "../enums/units/distance-unit";
import { TimeUnit } from "../enums/units/time-unit";

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
