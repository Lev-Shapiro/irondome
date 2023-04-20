import { MissileElement } from "./missile.element";
import { MissileFactory } from "./missile.factory";

import { locate } from "domain/locate.dto";
import { Coords } from "domain/types/coords";

import { MissileModel } from "./missile.model";

import { ExplodeFactory } from "../explode/explode.factory";
import { Locator } from "domain/locate.dto";
import { MissileEntity } from "./missile.entity";
import { SpeedDto } from "domain/dtos/speed.dto";

export class MissileController {
    constructor(
        private missileFactory: MissileFactory,
        private explodeFactory: ExplodeFactory
    ) {}

    create(speed: SpeedDto, coords: Coords) {
        const htmlElement = this.missileFactory.build(coords);

        const element = new MissileElement(htmlElement);
        const entity = locate(new MissileEntity(speed), coords);

        const model = new MissileModel(element, entity)

        return model;
    }

    async launch(missile: MissileModel, target: Coords) {
        await missile.launch(target);
    }

    async explode(missile: MissileModel, target: MissileModel) {
        const explode = this.explodeFactory.generate(target.coords);

        missile.remove();
        target.remove();

        await explode.wait();
        explode.remove();
    }
}
