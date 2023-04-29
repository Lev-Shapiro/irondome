import { Coords, Size } from 'type'

import { ObjectElement } from './object.element'

export abstract class ObjectFactory {
  constructor(
    public readonly parent: HTMLDivElement,
    public readonly size: Size
  ) {}

  private createParent() {
    const parent = document.createElement('div')
    parent.className = 'object'

    parent.style.width = this.size.width + 'px'
    parent.style.height = this.size.height + 'px'

    return parent
  }

  /* width & height by default full sized, 
  but if there is smaller component then 
  at the implementation level it can be changed */
  createImage(size: Size, src: string) {
    const image = new Image(size.width, size.height)
    image.src = src

    return image
  }

  /* width & height by default full sized, 
  but if there is smaller component then 
  at the implementation level it can be changed */
  createVideo(size: Size, src: string, autoplay: boolean) {
    const video = document.createElement('video')
    video.width = size.width
    video.height = size.height
    video.src = src
    video.muted = true
    video.autoplay = autoplay

    return video
  }

  wrap(...elements: HTMLElement[]) {
    const parent = this.createParent()

    for (var i = 0; i < elements.length; i++) {
      parent.appendChild(elements[i])
    }

    return parent
  }

  abstract build(coords: Coords, ...props: any[]): ObjectElement
}
