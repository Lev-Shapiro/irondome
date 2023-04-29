import { Size } from 'type'

import { MovingObjectElement } from '../shared/moving-object.element'

export class BabaYagaElement extends MovingObjectElement {
  constructor(
    wrapper: HTMLDivElement,
    element: HTMLImageElement,
    private readonly ultraFireImage: HTMLImageElement,
    size: Size
  ) {
    super(wrapper, element, size)
  }

  launch() {
    this.ultraFireImage.className = 'babaYagaExhaustFlame active'
  }
}
