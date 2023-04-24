import { createRef, useEffect } from 'react'

import { Coords } from 'type'

import { SavedMissile } from 'dto'

import { getMissileController } from 'scripts/getMissileController'

import { MissileModel } from 'objects/buildings'

import { createMouseListener } from './createMouseListener'

export const usePlayground = (
  speed: number,
  zoom: number,

  add: (missile: MissileModel) => SavedMissile,
  remove: (id: number) => void
) => {
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
      const model = controller.create(speed * zoom, coords)

      const savedModel = add(model)

      return savedModel
    }

    const listener = createMouseListener(
      controller,
      playground,
      createMissile,
      remove,
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
