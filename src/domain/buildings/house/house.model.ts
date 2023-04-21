import { BuildingModel } from "../abstract/model.abstract";
import { HouseElement } from "./house.element";
import { HouseEntity } from "./house.entity";

export class HouseModel extends BuildingModel<HouseElement, HouseEntity> {}
