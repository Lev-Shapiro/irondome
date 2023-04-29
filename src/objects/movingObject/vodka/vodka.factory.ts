import type { Coords } from 'type'

import { ObjectFactory } from 'objects/object'

import { MovingObjectElement } from '../shared/moving-object.element'

export class VodkaFactory extends ObjectFactory {
  build(coords: Coords) {
    const vodkaImage = this.createImage(this.size, 'vodka.webp')

    const wrapper = this.wrap(vodkaImage)

    const element = new MovingObjectElement(wrapper, vodkaImage, this.size)

    element.setCoords(coords)

    this.parent.appendChild(wrapper)

    return element
  }
}
