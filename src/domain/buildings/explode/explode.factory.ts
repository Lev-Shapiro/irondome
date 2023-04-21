import { ExplodeElement } from "./explode.element";

import type { Coords } from "type";

export class ExplodeFactory {
    constructor(private readonly parent: HTMLDivElement) {}

    private height = 256;
    private width = 256;

    build(coords: Coords) {
        const image = document.createElement("video");

        image.className = "object explode";
        image.src = "/explosion.webm";
        image.muted = true;
        image.autoplay = true;

        image.style.top = coords.y + "px";
        image.style.left = coords.x + "px";

        image.width = this.width;
        image.height = this.height;

        this.parent.appendChild(image);

        const element = new ExplodeElement(image);

        return element;
    }
}
