import { SpeedDto } from 'dto'

import { DistanceUnit, TimeUnit } from 'enum'

export const km1200hour = new SpeedDto(
  1,
  TimeUnit.Hour,
  1200,
  DistanceUnit.Kilometer
)
