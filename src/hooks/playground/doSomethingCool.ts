import { Coords } from 'type'

import { Speed } from 'dto'

import { DistanceUnit, EffectorType, TimeUnit } from 'enum'

import { MovingObjectController } from 'controller/movingObject/moving-object.controller'

export const doSomethingCool = async (
  controller: MovingObjectController,
  playgroundWidth: number
) => {
  const time = TimeUnit.Millisecond
  const timeAmount = 1

  const distance = DistanceUnit.Pixel
  const distanceAmount = 1

  const speed = new Speed(distanceAmount, distance, timeAmount, time).default

  const doStuff = async (target: Coords) => {
    const missile = controller.create(speed, {
      x: playgroundWidth / 2,
      y: window.innerHeight,
    })

    await controller.launch(missile, target)

    await controller.destroy(EffectorType.Firework, missile, target)
  }

  doStuff({
    x: 100,
    y: 100,
  })

  setTimeout(() => {
    doStuff({
      x: 800,
      y: 100,
    })
  }, 400)

  //   doStuff({
  //     x: Math.random() * playgroundWidth,
  //     y: Math.random() * window.innerHeight * 0.6,
  //   })
}
