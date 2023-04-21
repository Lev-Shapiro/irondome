import type { HouseImageLevel } from "enum";

import type { Coords } from "type";

import { HouseElement, HouseEntity, HouseModel } from "buildings/house";

export class HouseFactory {
    private height = 360;
    private width = 360;

    constructor(private readonly parent: HTMLDivElement) {}

    build(imageLevel: HouseImageLevel, coords: Coords) {
        const wrapper = document.createElement("div");
        wrapper.className = "object";

        const image = document.createElement("img");

        image.alt = "House";

        image.src = imageLevel;

        const element = new HouseElement(
            wrapper,
            image,
            this.width / 8,
            this.height / 8
        );

        element.setCoords(coords);

        const entity = new HouseEntity();

        const model = new HouseModel(element, entity, coords);

        wrapper.appendChild(image);
        this.parent.appendChild(wrapper);

        return model;
    }
}
