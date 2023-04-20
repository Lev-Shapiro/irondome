import { MissileElement } from "./missile.element";
import { MissileEntity } from "./missile.entity";

import { Coords } from "domain/types/coords";
import { Locator } from "domain/locate.dto";

export class MissileModel {
    renderInterval = 40;

    constructor(
        private element: MissileElement,
        private entity: Locator<MissileEntity>
    ) {}

    get coords() {
        return this.entity.coords;
    }

    rotate(to: Coords) {
        const from = this.entity.coords;

        const coords =
            (Math.atan2(to.y - from.y, to.x - from.x) * 180) / Math.PI + 90;

        this.element.rotate(coords);
    }

    launch(target: Coords) {
        var { deltaX, deltaY, counter } = this.calculate(target);

        this.rotate(target);

        return new Promise((resolve) => {
            const launcher = setInterval(() => {
                if (counter === 0) {
                    clearInterval(launcher);
                    resolve(undefined);
                    return;
                }

                this.setCoords({
                    x: this.entity.coords.x + deltaX,
                    y: this.entity.coords.y + deltaY,
                });

                counter--;
            }, this.renderInterval);
        });
    }

    remove() {
        this.element.destroy();
    }

    private calculate(target: Coords) {
        const speed = this.entity.speed.pixelsPerMillisecond;

        const dx = target.x - this.entity.coords.x,
            dy = target.y - this.entity.coords.y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        const deltaX = (dx / distance) * speed * this.renderInterval;
        const deltaY = (dy / distance) * speed * this.renderInterval;

        const counter = Math.round(dx / deltaX) || Math.round(dy / deltaY);

        return { deltaX, deltaY, counter };
    }

    private setCoords(coords: Coords) {
        this.element.setCoords(coords);
        this.entity.coords = {...coords};
    }
}
