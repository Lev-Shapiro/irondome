import type { Coords } from 'type'

import { ObjectFactory } from 'objects/object'

import { BabaYagaElement } from './baba-yaga.element'

export class BabaYagaFactory extends ObjectFactory {
  build(coords: Coords) {
    const babaYagaImage = this.createImage(this.size, 'baba-yaga.webp')
    const ultraFireImage = this.createImage(
      {
        width: this.size.height / 2,
        height: this.size.width / 2,
      },
      'missile-fire.gif'
    )

    const wrapper = this.wrap(babaYagaImage, ultraFireImage)

    const element = new BabaYagaElement(
      wrapper,
      babaYagaImage,
      ultraFireImage,
      this.size
    )

    element.setCoords(coords)

    this.parent.appendChild(wrapper)

    return element
  }
}
