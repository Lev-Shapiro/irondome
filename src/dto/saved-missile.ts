import { MissileModel } from 'objects/buildings'

export class SavedMissile {
  constructor(
    public readonly id: number,
    public readonly missile: MissileModel
  ) {}
}
