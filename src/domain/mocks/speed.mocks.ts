import { SpeedDto } from "domain/dtos/speed.dto";

import { DistanceUnit } from "domain/enums/units/distance-unit";
import { TimeUnit } from "domain/enums/units/time-unit";

export const km1200hour = new SpeedDto(1, TimeUnit.Hour, 1200, DistanceUnit.Kilometer);