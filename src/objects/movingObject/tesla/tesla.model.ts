import type { Coords } from 'type'

import { getRotateDegree } from 'scripts/getRotateDegree'

import { MovingObjectModel } from '../abstract'

export class TeslaModel extends MovingObjectModel {
  renderInterval = 20

  rotate(to: Coords) {
    const from = this.coords

    const coords = getRotateDegree(to, from) + 270

    this.element.rotate(coords)
  }

  launch(target: Coords) {
    var { deltaX, deltaY, counter } = this.calculate(target)

    this.counter = counter

    this.rotate(target)

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
}
