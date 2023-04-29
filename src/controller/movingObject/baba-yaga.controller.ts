import { Coords } from 'type'

import {
  BabaYagaFactory,
  BabaYagaModel,
  MovingObjectEntity,
} from 'objects/movingObject'

import { MovingObjectController } from './moving-object.controller'

export class BabaYagaController extends MovingObjectController<
  BabaYagaFactory,
  BabaYagaModel
> {
  create(speed: number, coords: Coords): BabaYagaModel {
    const element = this.factory.build(coords)

    const entity = new MovingObjectEntity('BabaYaga', speed)
    const model = new BabaYagaModel(element, entity, coords)

    return model
  }

  async launch(babaYaga: BabaYagaModel, target: Coords) {
    await babaYaga.launch(target)
  }
}
