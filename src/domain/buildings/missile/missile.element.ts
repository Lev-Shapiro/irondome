import { BuildingElement } from "buildings/building";

export class MissileElement extends BuildingElement {
    rotate(deg: number) {
        this.element.style.transform = `rotate(${deg}deg)`;
    }
}
