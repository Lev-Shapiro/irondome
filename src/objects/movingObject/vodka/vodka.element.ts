import { ObjectElement } from 'objects/object'

export class VodkaElement extends ObjectElement {
  rotate(deg: number) {
    this.wrapper.style.transform = `rotate(${deg}deg)`
  }
}
