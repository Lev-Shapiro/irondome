import { Missiles } from 'type/missile'

import { SavedMissile } from 'dto'

import { MissileModel } from 'objects/buildings'

export class MissileRepository {
  private newId = 0

  missiles: Missiles = {}

  add(missile: MissileModel): SavedMissile {
    this.newId++

    const savedMissile = new SavedMissile(this.newId, missile)

    this.missiles[this.newId] = savedMissile

    return savedMissile
  }

  remove(id: number) {
    if (!this.missiles[id]) {
      throw new Error('Developer fucked up, missile not found')
    }
    delete this.missiles[id]
  }
}
