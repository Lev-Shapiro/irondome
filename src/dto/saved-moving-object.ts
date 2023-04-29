import { MovingObjectModel } from 'objects/movingObject/abstract'

export class SavedMovingObject {
  constructor(
    public readonly id: number,
    public readonly movingObject: MovingObjectModel
  ) {}
}
