import type { Coords } from 'type'

import { BuildingFactory } from 'buildings/building'

import { ExplodeElement } from './explode.element'

export class ExplodeFactory extends BuildingFactory {
  build(coords: Coords) {
    const video = this.createVideo(this.size, 'explosion.webm', true)

    const wrapper = this.wrap(video)

    const element = new ExplodeElement(wrapper, video, this.size)
    element.setCoords(coords)

    this.parent.appendChild(wrapper)

    return element
  }
}
