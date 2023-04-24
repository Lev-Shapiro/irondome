import { ChangeEventHandler, FC } from 'react'
import { Button, Form, ListGroup, ListGroupItem } from 'react-bootstrap'

import Image from 'next/image'

import { SavedMovingObject } from 'dto'

import { DistanceUnit, MovingObjectType, TimeUnit } from 'enum'

import { getEnumKeys } from 'scripts/getEnumKeys'

import s from './manager.module.css'

interface ManagerProps {
  pxPerMs: number

  zoom: number
  zoomIn: () => void
  zoomOut: () => void

  time: number
  timeAmount: number
  selectTimeUnit: ChangeEventHandler<HTMLSelectElement>
  chooseTimeAmount: ChangeEventHandler<HTMLInputElement>

  distance: number
  distanceAmount: number
  selectDistanceUnit: ChangeEventHandler<HTMLSelectElement>
  chooseDistanceAmount: ChangeEventHandler<HTMLInputElement>

  movingObjects: SavedMovingObject[]

  movingObjectType: MovingObjectType
  updateMovingObjectType: ChangeEventHandler<HTMLSelectElement>
}

export const Manager: FC<ManagerProps> = ({
  pxPerMs,

  zoom,
  zoomIn,
  zoomOut,

  timeAmount,
  selectTimeUnit,
  chooseTimeAmount,

  distanceAmount,
  selectDistanceUnit,
  chooseDistanceAmount,

  movingObjects,

  movingObjectType,
  updateMovingObjectType,
}) => {
  return (
    <ListGroup className={s.manager}>
      <ListGroupItem className={s.managerRow}>
        <div>
          <h5>Projectile Type</h5>

          <Form.Select
            value={movingObjectType}
            aria-label="Select time"
            onChange={updateMovingObjectType}
          >
            {getEnumKeys(MovingObjectType).map((type) => (
              <option key={type} value={MovingObjectType[type]}>
                {type}
              </option>
            ))}
          </Form.Select>
        </div>
      </ListGroupItem>

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
              <Form.Range
                min={1}
                max={100}
                defaultValue={1}
                onChange={chooseTimeAmount}
              />
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
              <Form.Range
                min={1}
                max={5000}
                defaultValue={1}
                onChange={chooseDistanceAmount}
              />
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

      <ListGroupItem className={s.managerRow}>
        <div>
          <h5>All movingObjects</h5>

          {movingObjects.length ? (
            <ListGroup className="gap-3">
              {movingObjects.map((movingObject) => {
                const time =
                  movingObject.movingObject.estimatedTime?.convertToOptimal()

                return (
                  <ListGroupItem
                    className={s.missileData}
                    key={movingObject.id}
                  >
                    <div className={s.missileDataBadge}>
                      <span>{movingObject.movingObject.entity.type}</span>

                      <Image
                        width={20}
                        height={20}
                        src="/icons/hashtag.svg"
                        alt="number icon"
                      />
                      <span>{movingObject.id}</span>
                    </div>
                    <div
                      className={'badge text-secondary ' + s.missileDataBadge}
                    >
                      <Image
                        width={20}
                        height={20}
                        src="/icons/timer.svg"
                        alt="time icon"
                        style={{
                          paddingLeft: '0.5rem',
                        }}
                      />
                      <span>
                        {time?.amount} {time?.unit}
                      </span>
                    </div>
                  </ListGroupItem>
                )
              })}
            </ListGroup>
          ) : (
            <span className="text-secondary">movingObjects not found</span>
          )}
        </div>
      </ListGroupItem>
    </ListGroup>
  )
}
