import { BuildingElement } from "../abstract/element.abstract";

export class MissileElement extends BuildingElement {
    rotate(deg: number) {
        this.element.style.transform = `rotate(${deg}deg)`;
    }
}
