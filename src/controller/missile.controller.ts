import { Coords } from 'type'

import { MissileType } from 'enum'

import { ExplodeFactory } from 'objects/effectors'
import {
  MissileEntity,
  MissileFactory,
  MissileModel,
} from 'objects/movingObject'
import { ObjectModel } from 'objects/object'

export class MissileController {
  constructor(
    private missileFactory: MissileFactory,
    private explodeFactory: ExplodeFactory
  ) {}

  create(speed: number, coords: Coords): MissileModel {
    const element = this.missileFactory.build(coords)

    const entity = new MissileEntity(MissileType.Falcon9, speed)
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
