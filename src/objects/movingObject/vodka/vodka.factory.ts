import type { Coords } from 'type'

import { ObjectFactory } from 'objects/object'

import { VodkaElement } from './vodka.element'

export class VodkaFactory extends ObjectFactory {
  build(coords: Coords) {
    const vodkaImage = this.createImage(this.size, 'vodka.webp')

    const wrapper = this.wrap(vodkaImage)
    wrapper.className = 'object'

    const element = new VodkaElement(wrapper, vodkaImage, this.size)

    element.setCoords(coords)

    this.parent.appendChild(wrapper)

    return element
  }
}
