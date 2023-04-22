import type { Coords } from 'type'

import type { HouseImageLevel } from 'enum'

import type { HouseFactory } from 'buildings/house'

export class HouseController {
  constructor(private houseFactory: HouseFactory) {}

  create(imageLevel: HouseImageLevel, coords: Coords) {
    const element = this.houseFactory.build(imageLevel, coords)

    return element
  }
}
