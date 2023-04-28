import { Coords } from 'type'

import { SavedMovingObject } from 'dto'

import { EffectorType } from 'enum'

import { ExplosionService } from 'objects/effectors'

import { MovingObjectController } from 'controller/movingObject/moving-object.controller'

var disabled = false

export const createMouseListener = (
  controller: MovingObjectController,
  playground: HTMLDivElement,

  createMissile: (coords: Coords) => SavedMovingObject,
  removeMissile: (id: number) => void,
  delay: number
) => {
  const startX = window.innerWidth - playground.offsetWidth
  const shoot = async (e: MouseEvent) => {
    if (e.clientX < startX) return

    if (disabled) return
    disabled = true
    setTimeout(() => (disabled = false), delay)

    const savedMovingObject = createMissile({
      x: playground.offsetWidth / 2,
      y: playground.offsetHeight / 2,
    })

    const target = {
      x: e.clientX - startX,
      y: e.clientY,
    }

    await controller.launch(savedMovingObject.movingObject, target)

    removeMissile(savedMovingObject.id)

    await controller.destroy(
      EffectorType.Firework,
      savedMovingObject.movingObject,
      target
    )
  }

  window.addEventListener('mousemove', shoot)

  return shoot
}
