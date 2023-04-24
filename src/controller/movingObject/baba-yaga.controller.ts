import { Coords } from 'type'

import {
  BabaYagaEntity,
  BabaYagaFactory,
  BabaYagaModel,
} from 'objects/movingObject'
import { ObjectModel } from 'objects/object'

import { MovingObjectController } from './moving-object.controller'

export class BabaYagaController extends MovingObjectController<
  BabaYagaFactory,
  BabaYagaModel
> {
  create(speed: number, coords: Coords): BabaYagaModel {
    const element = this.factory.build(coords)

    const entity = new BabaYagaEntity('BabaYaga', speed)
    const model = new BabaYagaModel(element, entity, coords)

    return model
  }

  async launch(BabaYaga: BabaYagaModel, target: Coords) {
    await BabaYaga.launch(target)
  }

  async explode(BabaYaga: BabaYagaModel, target: ObjectModel | Coords) {
    const targetCoords = target instanceof ObjectModel ? target.coords : target
    const explode = this.explodeFactory.build(targetCoords)

    BabaYaga.remove()

    if (target instanceof ObjectModel) {
      target.remove()
    }

    await explode.wait()
    explode.destroy()
  }
}
