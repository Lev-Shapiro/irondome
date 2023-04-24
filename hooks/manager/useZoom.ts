import { useState } from 'react'

export const useZoom = () => {
  const [zoom, setZoom] = useState(1)

  const zoomIn = () => {
    if (zoom <= 2.4) {
      setZoom((zoom) => zoom + 0.2)
    }
  }

  const zoomOut = () => {
    if (zoom > 0.4) {
      setZoom((zoom) => zoom - 0.2)
    }
  }

  return {
    zoom,
    zoomIn,
    zoomOut,
  }
}
