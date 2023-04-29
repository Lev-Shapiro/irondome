import { ObjectElement } from 'objects/object'

export class ExplodeElement extends ObjectElement {
  private readonly time = 600
  async wait() {
    return new Promise((resolve) => setTimeout(resolve, this.time))
  }
}
