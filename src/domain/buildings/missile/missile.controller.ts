import { Coords } from 'type'

import { SpeedDto } from 'dto'

import { BuildingModel } from 'buildings/building'
import { ExplodeFactory } from 'buildings/explode'
import { MissileEntity, MissileFactory, MissileModel } from 'buildings/missile'

export class MissileController {
  constructor(
    private missileFactory: MissileFactory,
    private explodeFactory: ExplodeFactory
  ) {}

  create(speed: SpeedDto, coords: Coords) {
    const element = this.missileFactory.build(coords)

    const entity = new MissileEntity(speed)

    const model = new MissileModel(element, entity, coords)

    return model
  }

  async launch(missile: MissileModel, target: Coords) {
    await missile.launch(target)
  }

  async explode(missile: MissileModel, target: BuildingModel) {
    const explode = this.explodeFactory.build(target.coords)

    missile.remove()
    target.remove()

    await explode.wait()
    explode.remove()
  }
}
