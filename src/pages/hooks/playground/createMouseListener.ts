import { MissileController } from 'controller'

import { Coords } from 'type'

import { MissileModel } from 'objects'

var disabled = false

export const createMouseListener = (
  controller: MissileController,
  playground: HTMLDivElement,

  createMissile: (coords: Coords) => MissileModel,
  delay: number
) => {
  const shoot = async (e: MouseEvent) => {
    if (disabled) return
    disabled = true
    setTimeout(() => (disabled = false), delay)

    const missile = createMissile({
      x: window.innerWidth - playground.offsetWidth / 2,
      y: window.innerHeight - playground.offsetHeight / 2,
    })

    const target = {
      x: e.clientX,
      y: e.clientY,
    }

    await controller.launch(missile, target)
    await controller.explode(missile, target)
  }

  playground.addEventListener('mousemove', shoot)

  return shoot
}
