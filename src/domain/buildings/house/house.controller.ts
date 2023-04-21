import { Coords } from "domain/types/coords";

import { HouseImageLevel } from "domain/enums/images/house-image-levels";
import { HouseFactory } from "./house.factory";

export class HouseController {
    constructor(private houseFactory: HouseFactory) {}

    create(imageLevel: HouseImageLevel, coords: Coords) {
        const element = this.houseFactory.build(imageLevel, coords);

        return element;
    }
}
