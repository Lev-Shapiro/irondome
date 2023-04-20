import { Coords } from "domain/types/coords";

export class MissileElement {
    constructor(private readonly element: HTMLImageElement) {}

    rotate(deg: number) {
        this.element.style.transform = `rotate(${deg}deg)`;
    }

    setCoords(coords: Coords) {
        this.element.style.left = `${coords.x}px`;
        this.element.style.top = `${coords.y}px`;
    };

    destroy() {
        this.element.remove();
    }
}
