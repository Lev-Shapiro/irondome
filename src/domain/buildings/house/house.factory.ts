import { HouseImageLevel } from "domain/enums/images/house-image-levels";

import { Coords } from "domain/types/coords";

import { locate } from "domain/locate.dto";
import { HouseElement } from "./house.element";
import { HouseEntity } from "./house.entity";
import { HouseModel } from "./house.model";

export class HouseFactory {
    private height = 360;
    private width = 360;

    constructor(private readonly parent: HTMLDivElement) {}

    build(imageLevel: HouseImageLevel, coords: Coords) {
        const wrapper = document.createElement("div");
        const image = document.createElement("img");

        image.className = "object house";
        image.alt = "House";

        image.src = imageLevel;
        
        image.width = this.width / 8;
        image.height = this.height / 8;

        const element = new HouseElement(wrapper, image);

        element.setCoords(coords);

        const entity = new HouseEntity();

        const model = new HouseModel(element, entity, coords);

        wrapper.appendChild(image);
        this.parent.appendChild(image);

        return model;
    }
}
