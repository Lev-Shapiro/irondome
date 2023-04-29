import { Dispatch, SetStateAction, useMemo } from 'react'

import { SavedMovingObject } from 'dto'

import { MovingObjectModel } from 'objects/movingObject/abstract'

import { MovingObjectsRepository } from 'repository'

export const useMissileRepository = (
  setMissiles: Dispatch<SetStateAction<SavedMovingObject[]>>
) => {
  const missileRepository = useMemo(() => new MovingObjectsRepository(), [])

  const add = (movingObject: MovingObjectModel) => {
    const savedMovingObject = missileRepository.add(movingObject)
    setMissiles((movingObjects) => [...movingObjects, savedMovingObject])

    return savedMovingObject
  }

  const remove = (id: number) => {
    setMissiles((missiles) => missiles.filter((m) => m.id !== id))
    missileRepository.remove(id)
  }

  return {
    missileRepository,
    add,
    remove,
  }
}
