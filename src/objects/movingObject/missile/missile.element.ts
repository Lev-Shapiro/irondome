import { Size } from 'type'

import { ObjectElement } from 'objects/object'

export class MissileElement extends ObjectElement {
  constructor(
    wrapper: HTMLDivElement,
    element: HTMLImageElement,
    private readonly missileFireImage: HTMLImageElement,
    size: Size
  ) {
    super(wrapper, element, size)
  }

  rotate(deg: number) {
    this.wrapper.style.transform = `rotate(${deg}deg)`
  }

  launch() {
    this.missileFireImage.className = 'exhaustFlame active'
  }
}
