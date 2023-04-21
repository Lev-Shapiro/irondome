import { Coords } from "domain/types/coords";
import { MissileElement } from "./missile.element";

export class MissileFactory {
    private height = 673;
    private width = 155;

    constructor(private readonly parent: HTMLDivElement) {}

    build(coords: Coords) {
        const wrapper = document.createElement("div");
        wrapper.className = "object";

        const image = document.createElement("img");

        image.alt = "Missile";
        image.src = "/missile.webp";

        const element = new MissileElement(
            wrapper,
            image,
            this.width / 8,
            this.height / 8
        );

        element.setCoords(coords);

        wrapper.appendChild(image);
        this.parent.appendChild(wrapper);

        return element;
    }
}
