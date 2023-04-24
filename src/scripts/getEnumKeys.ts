export const getEnumKeys = <T extends object>(enumObj: T): (keyof T)[] =>
  Object.values(enumObj).filter((value) => typeof value === 'string')
