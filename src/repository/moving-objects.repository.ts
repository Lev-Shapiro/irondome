import { MovingObjects } from 'type'

import { SavedMovingObject } from 'dto'

import { MovingObjectModel } from 'objects/movingObject/abstract'

export class MovingObjectsRepository {
  private newId = 0

  movingObjects: MovingObjects = {}

  add(missile: MovingObjectModel): SavedMovingObject {
    this.newId++

    const savedMovingObject = new SavedMovingObject(this.newId, missile)

    this.movingObjects[this.newId] = savedMovingObject

    return savedMovingObject
  }

  remove(id: number) {
    if (!this.movingObjects[id]) {
      throw new Error('Developer fucked up, missile not found')
    }
    delete this.movingObjects[id]
  }
}
