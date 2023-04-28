import { Coords } from 'type'

import { EffectorType } from 'enum'

import { ExplodeFactory } from '../explode'
import { FireworkFactory } from '../firework'

export class ExplosionService {
  constructor(
    private explodeFactory: ExplodeFactory,
    private fireworkFactory: FireworkFactory
  ) {}

  async explode(type: EffectorType, target: Coords) {
    switch (type) {
      case EffectorType.Explode:
        const explode = this.explodeFactory.build(target)
        await explode.wait()

        explode.destroy()
        return

      case EffectorType.Firework:
        await this.fireworkFactory.build(target)
        return
    }
  }
}
