import { Coords } from 'type'

import { ParticlePolicy } from './'

export class ParticleEntity {
  x: number
  y: number

  readonly width = Math.random() * 4 + 1
  readonly height = Math.random() * 4 + 1

  vx = (Math.random() - 0.5) * 10
  vy = (Math.random() - 0.5) * 10
  alpha = Math.random() * 0.5 + 0.5

  readonly gravity = 0.05

  constructor(
    private policy: ParticlePolicy,
    private ctx: CanvasRenderingContext2D,
    private color: string,
    coords: Coords
  ) {
    this.x = coords.x - this.width / 2
    this.y = coords.y - this.height / 2

    // set valid velocity for axis Y

    const currVelocityY = Math.abs(this.vy)
    const maxVelocityY = Math.sqrt(25 - this.vx * this.vx)

    if (currVelocityY > maxVelocityY) {
      this.vy = currVelocityY > 0 ? maxVelocityY : -maxVelocityY
    }
  }

  move() {
    this.x += this.vx
    this.vy += this.gravity
    this.y += this.vy
    this.alpha -= 0.01

    return this.policy.isAlive(this.x, this.y, this.width, this.alpha)
  }

  draw() {
    const ctx = this.ctx

    ctx.save()
    ctx.beginPath()

    ctx.translate(this.x + this.width / 2, this.y + this.height / 2)
    ctx.arc(0, 0, this.width, 0, Math.PI * 2)
    ctx.fillStyle = this.color
    ctx.globalAlpha = this.alpha

    ctx.closePath()
    ctx.fill()
    ctx.restore()
  }
}
