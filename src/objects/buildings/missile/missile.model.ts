import type { Coords } from 'type'

import { BuildingModel, MissileElement, MissileEntity } from 'objects/buildings'

export class MissileModel extends BuildingModel<MissileElement, MissileEntity> {
  renderInterval = 20

  rotate(to: Coords) {
    const from = this.coords

    const coords =
      (Math.atan2(to.y - from.y, to.x - from.x) * 180) / Math.PI + 90

    this.element.rotate(coords)
  }

  launch(target: Coords) {
    var { deltaX, deltaY, counter } = this.calculate(target)

    this.rotate(target)
    this.element.launch()

    return new Promise((resolve) => {
      const launcher = setInterval(() => {
        if (counter === 0) {
          clearInterval(launcher)
          resolve(undefined)
          return
        }

        this.setCoords({
          x: this.coords.x + deltaX,
          y: this.coords.y + deltaY,
        })

        counter--
      }, this.renderInterval)
    })
  }

  private calculate(target: Coords) {
    const speed = this.entity.speed

    const dx = target.x - this.coords.x,
      dy = target.y - this.coords.y

    const distance = Math.sqrt(dx * dx + dy * dy)

    const deltaX = (dx / distance) * speed * this.renderInterval
    const deltaY = (dy / distance) * speed * this.renderInterval

    const counter = Math.round(dx / deltaX) || Math.round(dy / deltaY)

    return { deltaX, deltaY, counter }
  }

  private setCoords(coords: Coords) {
    this.element.setCoords(coords)
    this.coords = { ...coords }
  }
}
