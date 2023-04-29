import { Size } from 'type'

import { MovingObjectElement } from '../shared/moving-object.element'

export class MissileElement extends MovingObjectElement {
  constructor(
    wrapper: HTMLDivElement,
    element: HTMLImageElement,
    private readonly missileFireImage: HTMLImageElement,
    size: Size
  ) {
    super(wrapper, element, size)
  }

  launch() {
    this.missileFireImage.className = 'exhaustFlame active'
  }
}
