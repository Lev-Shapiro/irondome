import { Coords } from "domain/types/coords";
import { BuildingElement } from "./element.abstract";
import { BuildingEntity } from "./entity.abstract";

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
        this.element.destroy();
    }
}
