import { ChangeEventHandler, useState } from 'react'

export const useTime = () => {
  const [time, setTime] = useState(1)
  const [timeAmount, setTimeAmount] = useState(1)

  const selectTimeUnit: ChangeEventHandler<HTMLSelectElement> = (select) => {
    setTime(parseInt(select.target.value))
  }

  const chooseTimeAmount: ChangeEventHandler<HTMLInputElement> = (input) => {
    setTimeAmount(parseInt(input.target.value))
  }

  return {
    time,
    timeAmount,
    selectTimeUnit,
    chooseTimeAmount,
  }
}
