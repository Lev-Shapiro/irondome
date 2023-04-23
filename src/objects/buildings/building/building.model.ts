import { Coords } from 'type/coords'

import type { BuildingElement, BuildingEntity } from 'objects'

export abstract class BuildingModel<
  Element extends BuildingElement = BuildingElement,
  Entity extends BuildingEntity = BuildingEntity
> {
  constructor(
    public element: Element,
    public entity: Entity,
    public coords: Coords
  ) {}

  remove() {
    this.element.destroy()
  }
}
