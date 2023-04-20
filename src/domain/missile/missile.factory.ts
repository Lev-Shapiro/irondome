import { Coords } from "domain/types/coords";

export class MissileFactory {
    private height = 673;
    private width = 155;

    constructor(private readonly parent: HTMLDivElement) {}

    build(coords: Coords) {
        const image = document.createElement("img");

        image.className = "missile";
        image.alt = "Missile";
        image.src = "/missile.webp";

        image.style.top = coords.y + "px";
        image.style.left = coords.x + "px";

        image.width = this.width / 8;
        image.height = this.height / 8;

        this.parent.appendChild(image);

        return image;
    }
}
