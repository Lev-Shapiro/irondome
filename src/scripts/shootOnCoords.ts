import { MissileService } from 'services'

import { Coords } from 'type'

import { MissileModel } from 'buildings'

var disabled = false

export const shootOnCoords = async (
  service: MissileService,
  missile: MissileModel,
  delay: number,
  target: Coords
) => {
  if (disabled) return
  disabled = true
  setTimeout(() => (disabled = false), delay)

  await service.launch(missile, target)
  await service.explode(missile, target)
}
