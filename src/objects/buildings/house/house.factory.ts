import type { Coords } from 'type'

import type { HouseImageLevel } from 'enum'

import { BuildingFactory, HouseElement } from 'objects'

export class HouseFactory extends BuildingFactory {
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
