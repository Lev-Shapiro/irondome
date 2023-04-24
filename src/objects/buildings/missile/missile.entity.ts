import { MissileType } from 'enum'

export class MissileEntity {
  constructor(
    public readonly type: MissileType,
    public readonly speed: number
  ) {}
}
