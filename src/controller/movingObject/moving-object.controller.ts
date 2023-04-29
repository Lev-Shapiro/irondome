import { Coords } from 'type'

import { EffectorType } from 'enum'

import { ExplosionService } from 'objects/effectors'
import { MovingObjectModel } from 'objects/movingObject/abstract'
import { ObjectFactory, ObjectModel } from 'objects/object'

export abstract class MovingObjectController<
  Factory extends ObjectFactory = ObjectFactory,
  Model extends MovingObjectModel = MovingObjectModel
> {
  constructor(
    public factory: Factory,
    public explosionService: ExplosionService
  ) {}

  abstract create(speed: number, coords: Coords): Model

  abstract launch(movingObject: Model, target: Coords): unknown

  async destroy(
    animation: EffectorType,
    movingObject: Model,
    target: ObjectModel | Coords
  ) {
    movingObject.remove()

    if (target instanceof ObjectModel) {
      target.remove()
    }

    const targetCoords = target instanceof ObjectModel ? target.coords : target

    await this.explosionService.explode(animation, targetCoords)
  }
}
