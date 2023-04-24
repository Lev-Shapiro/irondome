import { TimeUnit } from 'enum'

export class TimeConverter {
  public timeInMs: number

  constructor(time: number, timeUnit: TimeUnit) {
    this.timeInMs = time * timeUnit
  }

  convert(timeUnit: TimeUnit) {
    return this.timeInMs / timeUnit
  }

  convertToOptimal() {
    if (this.timeInMs / TimeUnit.Hour >= 1) {
      return {
        amount: this.timeInMs / TimeUnit.Hour,
        unit: 'hours',
      }
    }

    if (this.timeInMs / TimeUnit.Minute >= 1) {
      return {
        amount: this.timeInMs / TimeUnit.Minute,
        unit: 'minutes',
      }
    }

    if (this.timeInMs / TimeUnit.Second >= 1) {
      return {
        amount: this.timeInMs / TimeUnit.Second,
        unit: 'seconds',
      }
    }

    return {
      amount: this.timeInMs,
      unit: 'milliseconds',
    }
  }
}
