import { Coords } from 'type/coords'

import type { ObjectElement, ObjectEntity } from 'objects/object'

export abstract class ObjectModel<
  Element extends ObjectElement = ObjectElement,
  Entity extends ObjectEntity = ObjectEntity
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
