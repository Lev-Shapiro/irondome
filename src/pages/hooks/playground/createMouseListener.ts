import { Coords } from 'type'

import { SavedMissile } from 'dto'

import { MissileController } from 'controller'

var disabled = false

export const createMouseListener = (
  controller: MissileController,
  playground: HTMLDivElement,

  createMissile: (coords: Coords) => SavedMissile,
  removeMissile: (id: number) => void,
  delay: number
) => {
  const shoot = async (e: MouseEvent) => {
    if (disabled) return
    disabled = true
    setTimeout(() => (disabled = false), delay)

    const savedMissile = createMissile({
      x: window.innerWidth - playground.offsetWidth / 2,
      y: window.innerHeight - playground.offsetHeight / 2,
    })

    const target = {
      x: e.clientX,
      y: e.clientY,
    }

    await controller.launch(savedMissile.missile, target)
    removeMissile(savedMissile.id)
    await controller.explode(savedMissile.missile, target)
  }

  playground.addEventListener('mousemove', shoot)

  return shoot
}
