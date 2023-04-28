import { useDistance } from './useDistance'
import { useTime } from './useTime'
import { useZoom } from './useZoom'

export const useManager = () => {
  const zoom = useZoom()
  const distance = useDistance()
  const time = useTime()

  return {
    ...zoom,
    ...distance,
    ...time,
  }
}
