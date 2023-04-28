import { Coords } from 'type'

import {
  MissileEntity,
  MissileFactory,
  MissileModel,
} from 'objects/movingObject'

import { MovingObjectController } from './moving-object.controller'

export class MissileController extends MovingObjectController<
  MissileFactory,
  MissileModel
> {
  create(speed: number, coords: Coords): MissileModel {
    const element = this.factory.build(coords)

    const entity = new MissileEntity('Falcon 9', speed)
    const model = new MissileModel(element, entity, coords)

    return model
  }

  async launch(missile: MissileModel, target: Coords) {
    await missile.launch(target)
  }
}
