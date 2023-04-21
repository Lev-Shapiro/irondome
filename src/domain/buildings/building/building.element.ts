import { Coords } from "type";

export abstract class BuildingElement {
    constructor(
        public readonly wrapper: HTMLDivElement,
        public readonly element: HTMLImageElement,
        public readonly width: number,
        public readonly height: number
    ) {
        this.element.width = this.width;
        this.element.height = this.height;
    }

    destroy() {
        this.element.remove();
    }

    setCoords(coords: Coords) {
        this.wrapper.style.left = `${coords.x - this.width / 2}px`;
        this.wrapper.style.top = `${coords.y - this.height / 2}px`;
    }
}
