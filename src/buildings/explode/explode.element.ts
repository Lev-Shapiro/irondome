import { BuildingElement } from 'buildings/building'

export class ExplodeElement extends BuildingElement {
  private readonly time = 800
  async wait() {
    return new Promise((resolve) => setTimeout(resolve, this.time))
  }
}
