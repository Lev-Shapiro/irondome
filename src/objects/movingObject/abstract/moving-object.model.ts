import { Coords } from 'type'

import { TimeConverter } from 'dto/time-converter'

import { TimeUnit } from 'enum'

import { ObjectModel } from 'objects/object'

import { MovingObjectElement } from '../shared/moving-object.element'
import { MovingObjectEntity } from '../shared/moving-object.entity'

export abstract class MovingObjectModel<
  Element extends MovingObjectElement = MovingObjectElement,
  Entity extends MovingObjectEntity = MovingObjectEntity
> extends ObjectModel<Element, Entity> {
  abstract renderInterval: number

  counter: number | undefined

  get estimatedTime() {
    if (!this.counter) return undefined

    const time = new TimeConverter(
      this.counter * this.renderInterval,
      TimeUnit.Millisecond
    )

    return time
  }

  calculate(target: Coords) {
    const speed = this.entity.speed

    const dx = target.x - this.coords.x,
      dy = target.y - this.coords.y

    const distance = Math.sqrt(dx * dx + dy * dy)

    const deltaX = (dx / distance) * speed * this.renderInterval
    const deltaY = (dy / distance) * speed * this.renderInterval

    const counter = Math.round(dx / deltaX) || Math.round(dy / deltaY)

    return { deltaX, deltaY, counter }
  }

  setCoords(coords: Coords) {
    this.element.setCoords(coords)
    this.coords = { ...coords }
  }
}
