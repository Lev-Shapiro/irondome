import { MissileModel } from 'objects/movingObject'

export class SavedMissile {
  constructor(
    public readonly id: number,
    public readonly missile: MissileModel
  ) {}
}
