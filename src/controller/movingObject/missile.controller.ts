import { Coords } from 'type'

import {
  MissileEntity,
  MissileFactory,
  MissileModel,
} from 'objects/movingObject'
import { ObjectModel } from 'objects/object'

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

  async explode(missile: MissileModel, target: ObjectModel | Coords) {
    const targetCoords = target instanceof ObjectModel ? target.coords : target
    const explode = this.explodeFactory.build(targetCoords)

    missile.remove()

    if (target instanceof ObjectModel) {
      target.remove()
    }

    await explode.wait()
    explode.destroy()
  }
}
