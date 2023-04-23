import { MissileController } from 'controller'

import { Size } from 'type'

import { ExplodeFactory, MissileFactory } from 'buildings'

export const getMissileController = (
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

  const controller = new MissileController(missileFactory, explodesFactory)

  return controller
}
