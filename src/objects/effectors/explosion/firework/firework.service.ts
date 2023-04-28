import { Coords } from 'type'

import { ParticleStatus } from 'enum/firework/particle-status'

import { ParticleEntity, ParticlePolicy } from './particle'

export class FireworkService {
  particles: { [renderId: string]: ParticleEntity[] } = {}

  renderId = 0

  constructor(
    private canvas: HTMLCanvasElement,
    private ctx: CanvasRenderingContext2D,
    private particlePolicy: ParticlePolicy,
    private width: number,
    private height: number
  ) {
    this.resize()

    window.requestAnimationFrame =
      window.requestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60)
      }
  }

  resize() {
    this.canvas.width = this.width
    this.canvas.height = this.height
  }

  async build(particleAmount: number, color: string, coords: Coords) {
    const createParticle = () =>
      new ParticleEntity(this.particlePolicy, this.ctx, color, coords)

    const particles: ParticleEntity[] = Array.from(
      new Array(particleAmount),
      createParticle
    )

    this.particles[this.renderId] = particles

    this.renderId++
    this.render(this.renderId)
  }

  private render(currId: number) {
    if (this.renderId != currId) return

    this.ctx.globalCompositeOperation = 'source-over'
    this.ctx.fillStyle = 'rgba(0,0,0, 0.1)'
    this.ctx.fillRect(0, 0, this.width, this.height)
    this.ctx.globalCompositeOperation = 'lighter'

    const fireworks = Object.keys(this.particles)

    for (const firework of fireworks) {
      this.continueFirework(firework)
    }

    // if firework didn't end and new render loop wasn't created => continue rendering
    if (Object.keys(this.particles).length) {
      window.requestAnimationFrame(() => this.render(currId))
    }
  }

  private continueFirework(id: string) {
    const particles = this.particles[id]

    const alive: ParticleEntity[] = []

    for (const particle of particles) {
      if (particle.move() === ParticleStatus.Alive) {
        particle.draw()
        alive.push(particle)
      }
    }

    if (alive.length === 0) {
      delete this.particles[id]

      return
    }

    this.particles[id] = alive
  }
}
