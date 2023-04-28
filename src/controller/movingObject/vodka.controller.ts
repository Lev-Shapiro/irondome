import { Coords } from 'type'

import { VodkaEntity, VodkaFactory, VodkaModel } from 'objects/movingObject'

import { MovingObjectController } from './moving-object.controller'

export class VodkaController extends MovingObjectController<
  VodkaFactory,
  VodkaModel
> {
  create(speed: number, coords: Coords): VodkaModel {
    const element = this.factory.build(coords)

    const entity = new VodkaEntity('vodka', speed)
    const model = new VodkaModel(element, entity, coords)

    return model
  }

  async launch(vodka: VodkaModel, target: Coords) {
    await vodka.launch(target)
  }
}
