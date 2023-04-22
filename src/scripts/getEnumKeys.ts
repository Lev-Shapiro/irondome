export const getEnumKeys = (enumObj: object) =>
  Object.values(enumObj).filter((value) => typeof value === 'string')
