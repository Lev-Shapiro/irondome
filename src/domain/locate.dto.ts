import { Coords } from "domain/types/coords";

export type Locator<T> = T & {
    coords: Coords;
};

export const locate = <T>(object: T, coords: Coords): Locator<T> => ({
    ...object,
    coords,
});
