import { ChangeEventHandler, useState } from 'react'

export const useDistance = () => {
  const [distance, setDistance] = useState(1)
  const [distanceAmount, setDistanceAmount] = useState(1)

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

  return {
    distance,
    distanceAmount,
    selectDistanceUnit,
    chooseDistanceAmount,
  }
}
