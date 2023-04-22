export class ExplodeElement {
  private readonly time = 800

  constructor(private readonly element: HTMLVideoElement) {}

  async wait() {
    return new Promise((resolve) => setTimeout(resolve, this.time))
  }

  remove() {
    this.element.remove()
  }
}
