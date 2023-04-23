import { createRef, useEffect } from 'react'

import { Coords } from 'type'

import { getMissileController } from 'scripts/getMissileController'

import { createMouseListener } from './createMouseListener'

export const usePlayground = (speed: number, zoom: number) => {
  const playgroundRef = createRef<HTMLDivElement>()
  const explosionRef = createRef<HTMLDivElement>()
  const houseRef = createRef<HTMLDivElement>()
  const missilesRef = createRef<HTMLDivElement>()

  useEffect(() => {
    const playground = playgroundRef.current
    const explosion = explosionRef.current
    const missiles = missilesRef.current

    if (!playground || !explosion || !missiles) return

    const controller = getMissileController(zoom, explosion, missiles)

    const createMissile = (coords: Coords) => {
      return controller.create(speed * zoom, coords)
    }

    const listener = createMouseListener(
      controller,
      playground,
      createMissile,
      200
    )

    return () => playground.removeEventListener('mousemove', listener)
  })

  return {
    playgroundRef,
    explosionRef,
    houseRef,
    missilesRef,
  }
}
