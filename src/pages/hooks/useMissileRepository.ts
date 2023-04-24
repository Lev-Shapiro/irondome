import { Dispatch, SetStateAction, useMemo } from 'react'

import { SavedMissile } from 'dto'

import { MissileModel } from 'objects/movingObject'

import { MissileRepository } from 'repository'

export const useMissileRepository = (
  setMissiles: Dispatch<SetStateAction<SavedMissile[]>>
) => {
  const missileRepository = useMemo(() => new MissileRepository(), [])

  const add = (missile: MissileModel) => {
    const savedMissile = missileRepository.add(missile)
    setMissiles((missiles) => [...missiles, savedMissile])

    return savedMissile
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
