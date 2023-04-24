import { Coords } from 'type'

import { SavedMovingObject } from 'dto'

import { MovingObjectController } from 'controller/movingObject/moving-object.controller'

var disabled = false

export const createMouseListener = (
  controller: MovingObjectController,
  playground: HTMLDivElement,

  createMissile: (coords: Coords) => SavedMovingObject,
  removeMissile: (id: number) => void,
  delay: number
) => {
  const shoot = async (e: MouseEvent) => {
    if (disabled) return
    disabled = true
    setTimeout(() => (disabled = false), delay)

    const savedMovingObject = createMissile({
      x: window.innerWidth - playground.offsetWidth / 2,
      y: window.innerHeight - playground.offsetHeight / 2,
    })

    const target = {
      x: e.clientX,
      y: e.clientY,
    }

    await controller.launch(savedMovingObject.movingObject, target)
    removeMissile(savedMovingObject.id)
    await controller.explode(savedMovingObject.movingObject, target)
  }

  playground.addEventListener('mousemove', shoot)

  return shoot
}
