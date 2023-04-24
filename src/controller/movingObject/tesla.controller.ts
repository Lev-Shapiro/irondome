import { Coords } from 'type'

import { TeslaEntity, TeslaFactory, TeslaModel } from 'objects/movingObject'
import { ObjectModel } from 'objects/object'

import { MovingObjectController } from './moving-object.controller'

export class TeslaController extends MovingObjectController<
  TeslaFactory,
  TeslaModel
> {
  create(speed: number, coords: Coords): TeslaModel {
    const element = this.factory.build(coords)

    const entity = new TeslaEntity('tesla', speed)
    const model = new TeslaModel(element, entity, coords)

    return model
  }

  async launch(tesla: TeslaModel, target: Coords) {
    await tesla.launch(target)
  }

  async explode(tesla: TeslaModel, target: ObjectModel | Coords) {
    const targetCoords = target instanceof ObjectModel ? target.coords : target
    const explode = this.explodeFactory.build(targetCoords)

    tesla.remove()

    if (target instanceof ObjectModel) {
      target.remove()
    }

    await explode.wait()
    explode.destroy()
  }
}
