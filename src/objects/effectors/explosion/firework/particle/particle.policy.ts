import { ParticleStatus } from 'enum'

export class ParticlePolicy {
  isAlive(x: number, y: number, width: number, alpha: number): ParticleStatus {
    return x <= -width || x >= screen.width || y >= screen.height || alpha <= 0
      ? ParticleStatus.Destroyed
      : ParticleStatus.Alive
  }
}
