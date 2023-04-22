import { MissileService } from 'services'

import { Size } from 'type'

import { ExplodeFactory, MissileFactory } from 'buildings'

export const getMissileService = (
  zoom: number,
  explosion: HTMLDivElement,
  missiles: HTMLDivElement
) => {
  const explosionSizes: Size = {
    width: 180 * zoom,
    height: 180 * zoom,
  }

  const missileSizes: Size = {
    width: (154 / 8) * zoom,
    height: (554 / 8) * zoom,
  }

  const explodesFactory = new ExplodeFactory(explosion, explosionSizes)
  const missileFactory = new MissileFactory(missiles, missileSizes)

  const service = new MissileService(missileFactory, explodesFactory)

  return service
}
