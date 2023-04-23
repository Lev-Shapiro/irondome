import { BuildingElement } from 'objects'

export class ExplodeElement extends BuildingElement {
  private readonly time = 800
  async wait() {
    return new Promise((resolve) => setTimeout(resolve, this.time))
  }
}
