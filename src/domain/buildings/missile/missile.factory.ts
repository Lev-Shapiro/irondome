import { Coords } from "domain/types/coords";
import { MissileElement } from "./missile.element";

export class MissileFactory {
    private height = 673;
    private width = 155;

    constructor(private readonly parent: HTMLDivElement) {}

    build(coords: Coords) {
        const wrapper = document.createElement("div");
        const image = document.createElement("img");

        image.className = "object missile";
        image.alt = "Missile";
        image.src = "/missile.webp";
        
        image.width = this.width / 8;
        image.height = this.height / 8;

        const element = new MissileElement(wrapper, image);

        element.setCoords(coords);

        wrapper.appendChild(image);
        this.parent.appendChild(image);

        return element
    }
}
