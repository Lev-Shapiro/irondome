import { createRef, useEffect } from 'react'

import { Coords, Size } from 'type'

import { SavedMovingObject } from 'dto'

import { MovingObjectType } from 'enum'

import { getController } from 'scripts/getController'

import { MovingObjectModel } from 'objects/movingObject/movingObject'

import { createMouseListener } from './createMouseListener'
import { doSomethingCool } from './doSomethingCool'
import { getExplosionService } from './getExplosionService'

export const usePlayground = (
  speed: number,
  zoom: number,
  movingObjectType: MovingObjectType,

  add: (movingObject: MovingObjectModel) => SavedMovingObject,
  remove: (id: number) => void
) => {
  const canvasRef = createRef<HTMLCanvasElement>()
  const playgroundRef = createRef<HTMLDivElement>()
  const explosionRef = createRef<HTMLDivElement>()
  const houseRef = createRef<HTMLDivElement>()
  const movingObjectsRef = createRef<HTMLDivElement>()

  useEffect(() => {
    const playground = playgroundRef.current
    const explosion = explosionRef.current
    const movingObjects = movingObjectsRef.current
    const canvas = canvasRef.current

    const explosionSizes: Size = {
      width: 180 * zoom,
      height: 180 * zoom,
    }

    if (!playground || !explosion || !movingObjects || !canvas) return

    const explosionService = getExplosionService(
      explosion,
      canvas,
      playground.offsetWidth,
      window.innerHeight,
      explosionSizes
    )

    if (!explosionService) return

    const controller = getController(
      zoom,
      movingObjects,
      movingObjectType,
      explosionService
    )

    // doSomethingCool(controller, playground.offsetWidth)

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

    // window.addEventListener('resize', fireworkEntity.resize, false)

    return () => {
      window.removeEventListener('mousemove', listener)
      // window.removeEventListener('resize', fireworkEntity.resize, false)
    }
  })

  return {
    playgroundRef,
    explosionRef,
    houseRef,
    movingObjectsRef,
    canvasRef,
  }
}
