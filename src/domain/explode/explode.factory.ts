import { Coords } from "domain/types/coords";
import { ExplodeElement } from "./explode.element";

export class ExplodeFactory {
    private parentId = "explodes";

    private height = 256;
    private width = 256;

    generate(coords: Coords) {
        const parent = document.getElementById(this.parentId);

        if(!parent) throw new Error("Parent not found");

        const image = document.createElement("video");

        image.className = "explode";
        image.src = "/explosion.webm";
        image.muted = true;
        image.autoplay = true;

        image.style.top = coords.y + "px";
        image.style.left = coords.x + "px";

        image.width = this.width;
        image.height = this.height;

        parent.appendChild(image);

        const element = new ExplodeElement(image);

        return element;
    }
}