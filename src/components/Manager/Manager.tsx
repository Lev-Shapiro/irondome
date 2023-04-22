import { getEnumKeys } from 'scripts/getEnumKeys'

import { ChangeEventHandler, Dispatch, FC, SetStateAction } from 'react'
import { Button, Form, ListGroup, ListGroupItem } from 'react-bootstrap'

import Image from 'next/image'

import { DistanceUnit, TimeUnit } from 'enum'

import s from './manager.module.css'

interface ManagerProps {
  pxPerMs: number
  setTime: Dispatch<SetStateAction<number>>

  timeAmount: number
  setTimeAmount: Dispatch<SetStateAction<number>>

  setDistance: Dispatch<SetStateAction<number>>

  distanceAmount: number
  setDistanceAmount: Dispatch<SetStateAction<number>>

  zoom: number
  setZoom: Dispatch<SetStateAction<number>>
}

export const Manager: FC<ManagerProps> = ({
  zoom,
  setZoom,
  pxPerMs,
  timeAmount,
  setTime,
  distanceAmount,
  setDistanceAmount,
  setDistance,
  setTimeAmount,
}) => {
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

  const selectTimeUnit: ChangeEventHandler<HTMLSelectElement> = (select) => {
    setTime(parseInt(select.target.value))
  }

  const chooseTimeAmount: ChangeEventHandler<HTMLInputElement> = (input) => {
    setTimeAmount(parseInt(input.target.value))
  }

  const selectDistanceUnit: ChangeEventHandler<HTMLSelectElement> = (
    select
  ) => {
    setDistance(Number(select.target.value))
  }

  const chooseDistanceAmount: ChangeEventHandler<HTMLInputElement> = (
    select
  ) => {
    setDistanceAmount(Number(select.target.value))
  }

  return (
    <ListGroup className={s.manager}>
      <ListGroupItem className={s.managerRow}>
        <Button onClick={zoomIn}>
          <Image src="icons/zoom-in.svg" width={16} height={16} alt="Zoom in" />
        </Button>
        <div>
          <h5>Zooming</h5>
          <span>{zoom.toFixed(2)}</span>
        </div>
        <Button onClick={zoomOut}>
          <Image
            src="icons/zoom-out.svg"
            width={16}
            height={16}
            alt="Zoom in"
          />
        </Button>
      </ListGroupItem>
      <ListGroupItem className={s.managerRow}>
        <div>
          <h5>Speed</h5>
          <p>{pxPerMs} pixels / millisecond</p>

          <div className={s.formSection}>
            <span>{timeAmount}</span>
            <div style={{ display: 'flex' }}>
              <Form.Range min={1} max={100} onChange={chooseTimeAmount} />
            </div>
            <Form.Select aria-label="Select time" onChange={selectTimeUnit}>
              {getEnumKeys(TimeUnit).map((unit) => (
                <option key={unit} value={TimeUnit[unit]}>
                  {unit}
                </option>
              ))}
            </Form.Select>
          </div>

          <div className={s.formSection}>
            <span>{distanceAmount}</span>
            <div style={{ display: 'flex' }}>
              <Form.Range min={1} max={5000} onChange={chooseDistanceAmount} />
            </div>
            <Form.Select aria-label="Select time" onChange={selectDistanceUnit}>
              {getEnumKeys(DistanceUnit).map((unit) => (
                <option key={unit} value={DistanceUnit[unit]}>
                  {unit}
                </option>
              ))}
            </Form.Select>
          </div>
        </div>
      </ListGroupItem>
    </ListGroup>
  )
}
