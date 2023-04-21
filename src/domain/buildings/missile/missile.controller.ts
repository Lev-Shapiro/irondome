import { MissileFactory } from "./missile.factory";

import { Coords } from "domain/types/coords";

import { MissileModel } from "./missile.model";

import { SpeedDto } from "domain/dtos/speed.dto";
import { ExplodeFactory } from "domain/buildings/explode/explode.factory";
import { MissileEntity } from "./missile.entity";
import { BuildingModel } from "../abstract/model.abstract";

export class MissileController {
    constructor(
        private missileFactory: MissileFactory,
        private explodeFactory: ExplodeFactory
    ) {}

    create(speed: SpeedDto, coords: Coords) {
        const element = this.missileFactory.build(coords);

        const entity = new MissileEntity(speed);

        const model = new MissileModel(element, entity, coords);

        return model;
    }

    async launch(missile: MissileModel, target: Coords) {
        await missile.launch(target);
    }

    async explode(missile: MissileModel, target: BuildingModel) {
        const explode = this.explodeFactory.build(target.coords);

        missile.remove();
        target.remove();

        await explode.wait();
        explode.remove();
    }
}
