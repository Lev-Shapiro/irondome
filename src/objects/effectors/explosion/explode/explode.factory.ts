import type { Coords } from 'type'

import { ObjectFactory } from 'objects/object'

import { ExplodeElement } from './explode.element'

export class ExplodeFactory extends ObjectFactory {
  build(coords: Coords) {
    const video = this.createVideo(this.size, 'explosion.webm', true)

    const wrapper = this.wrap(video)

    const element = new ExplodeElement(wrapper, video, this.size)
    element.setCoords(coords)

    this.parent.appendChild(wrapper)

    return element
  }
}
