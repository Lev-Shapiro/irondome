import { MovingObjectModel } from 'objects/movingObject/movingObject'

export class SavedMovingObject {
  constructor(
    public readonly id: number,
    public readonly movingObject: MovingObjectModel
  ) {}
}
