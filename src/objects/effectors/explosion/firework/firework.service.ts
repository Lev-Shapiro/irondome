import { Coords } from 'type'

import { ParticleStatus } from 'enum'

import { ParticleEntity, ParticlePolicy } from './particle'

export class FireworkService {
  fireworks = new Map<number, ParticleEntity[]>()

  renderId = 0

  constructor(
    private canvas: HTMLCanvasElement,
    private ctx: CanvasRenderingContext2D,
    private particlePolicy: ParticlePolicy,
    private width: number,
    private height: number
  ) {
    this.resize()
  }

  resize() {
    this.canvas.width = this.width
    this.canvas.height = this.height
  }

  build(particleAmount: number, color: string, coords: Coords) {
    const particles = Array.from(
      { length: particleAmount },
      () => new ParticleEntity(this.particlePolicy, this.ctx, color, coords)
    )

    this.fireworks.set(this.renderId, particles)

    this.renderId++
    this.render(this.renderId)
  }

  private render(currId: number) {
    if (this.renderId != currId) return

    this.ctx.globalCompositeOperation = 'source-over'
    this.ctx.fillStyle = 'rgba(0,0,0, 0.1)'
    this.ctx.fillRect(0, 0, this.width, this.height)
    this.ctx.globalCompositeOperation = 'lighter'

    const fireworksId = this.fireworks.keys()

    for (const id of fireworksId) {
      this.continueFirework(id)
    }

    // fireworks didn't expire => continue animating
    if (this.fireworks.size) {
      window.requestAnimationFrame(() => this.render(currId))
    }
  }

  private continueFirework(id: number) {
    const particles = this.fireworks.get(id)

    if (!particles) throw new Error("firework particles didn't load. strange.")

    const alive: ParticleEntity[] = []

    for (const particle of particles) {
      if (particle.move() === ParticleStatus.Alive) {
        particle.draw()
        alive.push(particle)
      }
    }

    if (alive.length === 0) return this.fireworks.delete(id)

    this.fireworks.set(id, alive)
  }
}
