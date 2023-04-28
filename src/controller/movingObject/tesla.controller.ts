import { Coords } from 'type'

import { TeslaEntity, TeslaFactory, TeslaModel } from 'objects/movingObject'

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
}
