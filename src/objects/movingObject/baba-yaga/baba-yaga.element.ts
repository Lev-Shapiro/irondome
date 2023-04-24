import { Size } from 'type'

import { ObjectElement } from 'objects/object'

export class BabaYagaElement extends ObjectElement {
  constructor(
    wrapper: HTMLDivElement,
    element: HTMLImageElement,
    private readonly ultraFireImage: HTMLImageElement,
    size: Size
  ) {
    super(wrapper, element, size)
  }

  rotate(deg: number) {
    this.wrapper.style.transform = `rotate(${deg}deg)`
  }

  launch() {
    this.ultraFireImage.className = 'babaYagaExhaustFlame active'
  }
}
