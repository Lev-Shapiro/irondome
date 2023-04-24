import { Coords } from 'type'

import { VodkaEntity, VodkaFactory, VodkaModel } from 'objects/movingObject'
import { ObjectModel } from 'objects/object'

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

  async explode(vodka: VodkaModel, target: ObjectModel | Coords) {
    const targetCoords = target instanceof ObjectModel ? target.coords : target
    const explode = this.explodeFactory.build(targetCoords)

    vodka.remove()

    if (target instanceof ObjectModel) {
      target.remove()
    }

    await explode.wait()
    explode.destroy()
  }
}
