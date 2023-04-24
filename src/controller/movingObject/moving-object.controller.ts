import { Coords } from 'type'

import { ExplodeFactory } from 'objects/effectors'
import { MovingObjectModel } from 'objects/movingObject/movingObject'
import { ObjectFactory, ObjectModel } from 'objects/object'

export abstract class MovingObjectController<
  Factory extends ObjectFactory = ObjectFactory,
  Model extends MovingObjectModel = MovingObjectModel
> {
  constructor(public factory: Factory, public explodeFactory: ExplodeFactory) {}

  abstract create(speed: number, coords: Coords): Model

  abstract launch(tesla: Model, target: Coords): unknown

  abstract explode(tesla: Model, target: ObjectModel | Coords): unknown
}
