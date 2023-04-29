import { DistanceUnit, TimeUnit } from 'enum'

export class Speed {
  constructor(
    public readonly distanceAmount: number,
    public readonly distance: DistanceUnit,
    public readonly timeAmount: number,
    public readonly time: TimeUnit
  ) {}

  get default() {
    return (this.distance * this.distanceAmount) / (this.time * this.timeAmount)
  }
}
