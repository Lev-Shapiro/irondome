import { Coords } from "domain/types/coords";

export class BuildingElement {
    constructor(public readonly wrapper: HTMLDivElement, public readonly element: HTMLImageElement) {}

    destroy() {
        this.element.remove();
    }

    setCoords(coords: Coords) {
        this.element.style.left = `${coords.x}px`;
        this.element.style.top = `${coords.y}px`;
    }
}