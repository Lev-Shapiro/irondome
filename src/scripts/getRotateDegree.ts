import { Coords } from 'type'

export const getRotateDegree = (to: Coords, from: Coords) => {
  return (Math.atan2(to.y - from.y, to.x - from.x) * 180) / Math.PI
}
