import { Size } from 'type'

import {
  ExplodeFactory,
  ExplosionService,
  FireworkFactory,
  FireworkService,
} from 'objects/effectors'

export const getExplosionService = (
  explosionElement: HTMLDivElement,
  canvasElement: HTMLCanvasElement,
  width: number,
  height: number,
  size: Size
) => {
  const ctx = canvasElement.getContext('2d')

  if (!ctx) return

  const fireworkService = new FireworkService(canvasElement, ctx, width, height)

  const fireworkFactory = new FireworkFactory(fireworkService)

  const explodeFactory = new ExplodeFactory(explosionElement, size)

  const explosionService = new ExplosionService(explodeFactory, fireworkFactory)

  return explosionService
}
