import type { Coords } from 'type'

import type { HouseImageLevel } from 'enum'

import { ObjectFactory } from 'objects/object'

import { HouseElement } from '.'

export class HouseFactory extends ObjectFactory {
  build(coords: Coords, imageLevel: HouseImageLevel) {
    const image = this.createImage(this.size, imageLevel)
    image.alt = 'House'

    const wrapper = this.wrap(image)

    const element = new HouseElement(wrapper, image, this.size)

    element.setCoords(coords)

    this.parent.appendChild(wrapper)

    return element
  }
}
