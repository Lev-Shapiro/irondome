import { Coords } from 'type'

import { SpeedDto } from 'dto'

import {
  ExplodeFactory,
  MissileEntity,
  MissileFactory,
  MissileModel,
} from 'buildings'
import { BuildingModel } from 'buildings/building'

export class MissileService {
  constructor(
    private missileFactory: MissileFactory,
    private explodeFactory: ExplodeFactory
  ) {}

  create(speed: number, coords: Coords) {
    const element = this.missileFactory.build(coords)

    const entity = new MissileEntity(speed)

    const model = new MissileModel(element, entity, coords)

    return model
  }

  async launch(missile: MissileModel, target: Coords) {
    await missile.launch(target)
  }

  async explode(missile: MissileModel, target: BuildingModel | Coords) {
    const targetCoords =
      target instanceof BuildingModel ? target.coords : target
    const explode = this.explodeFactory.build(targetCoords)

    missile.remove()

    if (target instanceof BuildingModel) {
      target.remove()
    }

    await explode.wait()
    explode.destroy()
  }
}
