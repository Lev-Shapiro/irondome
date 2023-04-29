import { Coords } from 'type'

import { MovingObjectEntity, TeslaFactory, TeslaModel } from 'objects/movingObject'

import { MovingObjectController } from './moving-object.controller'

export class TeslaController extends MovingObjectController<
  TeslaFactory,
  TeslaModel
> {
  create(speed: number, coords: Coords): TeslaModel {
    const element = this.factory.build(coords)

    const entity = new MovingObjectEntity('tesla', speed)
    const model = new TeslaModel(element, entity, coords)

    return model
  }

  async launch(tesla: TeslaModel, target: Coords) {
    await tesla.launch(target)
  }
}
