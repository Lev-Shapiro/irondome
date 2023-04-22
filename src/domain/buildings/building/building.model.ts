import { Coords } from 'domain/type/coords'

import { BuildingElement, BuildingEntity } from 'buildings/building'

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
