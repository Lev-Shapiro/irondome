import { Size } from 'type'

import { MovingObjectType } from 'enum'

import { ExplodeFactory } from 'objects/effectors'
import {
  BabaYagaFactory,
  MissileFactory,
  TeslaFactory,
  VodkaFactory,
} from 'objects/movingObject'

import {
  BabaYagaController,
  MissileController,
  TeslaController,
  VodkaController,
} from 'controller'

export const getController = (
  zoom: number,
  explosion: HTMLDivElement,
  missiles: HTMLDivElement,
  movingObjectType: MovingObjectType
) => {
  const explosionSizes: Size = {
    width: 180 * zoom,
    height: 180 * zoom,
  }

  const movingObjectSizes: Size =
    movingObjectType != MovingObjectType.BabaYaga
      ? {
          width: (154 / 8) * zoom,
          height: (554 / 8) * zoom,
        }
      : {
          height: (154 / 8) * zoom,
          width: (554 / 8) * zoom,
        }

  const explodesFactory = new ExplodeFactory(explosion, explosionSizes)

  switch (movingObjectType) {
    case MovingObjectType.Missile:
      const missileFactory = new MissileFactory(missiles, movingObjectSizes)

      return new MissileController(missileFactory, explodesFactory)
    case MovingObjectType.Tesla:
      const teslaFactory = new TeslaFactory(missiles, movingObjectSizes)

      return new TeslaController(teslaFactory, explodesFactory)
    case MovingObjectType.Vodka:
      const vodkaFactory = new VodkaFactory(missiles, movingObjectSizes)

      return new VodkaController(vodkaFactory, explodesFactory)
    case MovingObjectType.BabaYaga:
      const babaYagaFactory = new BabaYagaFactory(missiles, movingObjectSizes)

      return new BabaYagaController(babaYagaFactory, explodesFactory)
  }
}
