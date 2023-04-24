import type { Coords } from 'type'

import { TeslaElement, TeslaEntity } from '.'
import { MovingObjectModel } from '../movingObject'

export class TeslaModel extends MovingObjectModel<TeslaElement, TeslaEntity> {
  renderInterval = 20

  rotate(to: Coords) {
    const from = this.coords

    const coords =
      (Math.atan2(to.y - from.y, to.x - from.x) * 180) / Math.PI + 270

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
