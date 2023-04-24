import { Coords, Size } from 'type'

export abstract class ObjectElement {
  constructor(
    public readonly wrapper: HTMLDivElement,
    public readonly element: HTMLImageElement | HTMLVideoElement,
    public readonly size: Size
  ) {}

  destroy() {
    this.wrapper.remove()
  }

  setCoords(coords: Coords) {
    this.wrapper.style.left = `${coords.x - this.size.width / 2}px`
    this.wrapper.style.top = `${coords.y - this.size.height / 2}px`
  }
}
