import { Size } from 'type'

import { MissileFactory } from 'objects/buildings'
import { ExplodeFactory } from 'objects/effectors'

import { MissileController } from 'controller'

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

  const missileFactory = new MissileFactory(missiles, missileSizes)

  const explodesFactory = new ExplodeFactory(explosion, explosionSizes)

  const controller = new MissileController(missileFactory, explodesFactory)

  return controller
}
