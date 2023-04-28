import { Coords } from 'type'

export abstract class ExplosionEntity {
  abstract build(particleAmount: number, color: string, coords: Coords): void
}
