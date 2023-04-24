import type { Coords } from 'type'

import { ObjectFactory } from 'objects/object'

import { MissileElement } from '.'

export class MissileFactory extends ObjectFactory {
  build(coords: Coords) {
    const missileImage = this.createImage(this.size, 'missile.webp')
    const missileFireImage = this.createImage(
      {
        width: this.size.width / 2,
        height: this.size.width * 2,
      },
      'missile-fire.gif'
    )

    const wrapper = this.wrap(missileImage, missileFireImage)
    wrapper.className = 'object'

    const element = new MissileElement(
      wrapper,
      missileImage,
      missileFireImage,
      this.size
    )

    element.setCoords(coords)

    this.parent.appendChild(wrapper)

    return element
  }
}
