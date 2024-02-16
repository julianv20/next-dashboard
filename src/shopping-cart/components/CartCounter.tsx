'use client'

interface Props {
  value?: number
}

import { useState } from 'react'

export const CartCounter = ({ value = 0 }: Props) => {
  const [counter, setCounter] = useState(value)

  const handleIncrement = (value: number) => {
    setCounter(counter + value)
  }

  const handleDecrement = (value: number) => {
    if (counter - value < 0) return
    setCounter(counter - value)
  }

  return (
    <section className="flex flex-col justify-center items-center text-[#0D0D0D]  bg-[#F2F2F2] rounded-lg p-5">
      <span className="text-xl font-semibold">Productos en el carrito</span>
      <span className="text-9xl">{counter}</span>
      <div className="flex gap-2">
        <button
          onClick={() => handleIncrement(1)}
          className="p3 bg-[#0B4FD9] text-neutral-100 w-[60px] rounded-lg font-semibold text-md border border-neutral-900 hover:bg-slate-800/85 hover:border-neutral-100 transition-all duration-300"
        >
          +1
        </button>
        <button
          onClick={() => handleDecrement(1)}
          className="p3 bg-[#0B4FD9] text-neutral-100 w-[60px] rounded-lg font-semibold text-md border border-neutral-900 hover:bg-slate-800/85 hover:border-neutral-100 transition-all duration-300"
        >
          -1
        </button>
      </div>
    </section>
  )
}
