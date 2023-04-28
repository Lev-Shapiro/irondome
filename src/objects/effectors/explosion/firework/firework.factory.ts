import { Coords } from 'type'

import { FireworkService } from '.'

export class FireworkFactory {
  constructor(private service: FireworkService) {}

  async build(coords: Coords) {
    const particleAmount = this.randomParticleAmount(200, 250)
    const color = this.generateColor()

    await this.service.build(particleAmount, color, coords)
  }

  private generateColor() {
    return (
      'rgb(' +
      ~~(Math.random() * 200 + 55) +
      ',' +
      ~~(Math.random() * 200 + 55) +
      ',' +
      ~~(Math.random() * 200 + 55) +
      ')'
    )
  }

  private randomParticleAmount(min: number, max: number) {
    return Math.random() * (max - min) + min
  }
}
