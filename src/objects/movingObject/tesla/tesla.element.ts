import { ObjectElement } from 'objects/object'

export class TeslaElement extends ObjectElement {
  rotate(deg: number) {
    this.wrapper.style.transform = `rotate(${deg}deg)`
  }
}
