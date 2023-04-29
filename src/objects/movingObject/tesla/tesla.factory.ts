import type { Coords } from 'type'

import { ObjectFactory } from 'objects/object'

import { MovingObjectElement } from '../shared/moving-object.element'

export class TeslaFactory extends ObjectFactory {
  build(coords: Coords) {
    const teslaImage = this.createImage(this.size, 'tesla.webp')

    const wrapper = this.wrap(teslaImage)
    wrapper.className = 'object'

    const element = new MovingObjectElement(wrapper, teslaImage, this.size)

    element.setCoords(coords)

    this.parent.appendChild(wrapper)

    return element
  }
}
