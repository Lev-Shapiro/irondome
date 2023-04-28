import { Size } from 'type'

import { MovingObjectType } from 'enum'

import { ExplosionService } from 'objects/effectors'
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
  missiles: HTMLDivElement,
  movingObjectType: MovingObjectType,
  explosionService: ExplosionService
) => {
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

  switch (movingObjectType) {
    case MovingObjectType.Missile:
      const missileFactory = new MissileFactory(missiles, movingObjectSizes)

      return new MissileController(missileFactory, explosionService)
    case MovingObjectType.Tesla:
      const teslaFactory = new TeslaFactory(missiles, movingObjectSizes)

      return new TeslaController(teslaFactory, explosionService)
    case MovingObjectType.Vodka:
      const vodkaFactory = new VodkaFactory(missiles, movingObjectSizes)

      return new VodkaController(vodkaFactory, explosionService)
    case MovingObjectType.BabaYaga:
      const babaYagaFactory = new BabaYagaFactory(missiles, movingObjectSizes)

      return new BabaYagaController(babaYagaFactory, explosionService)
  }
}
