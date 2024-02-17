'use client'

import { useAppDispatch, useAppSelector } from '@/sotre'
import {
  addOne,
  initCounterState,
  minusOne
} from '@/sotre/counter/counterSlice'
import { useEffect } from 'react'

interface Props {
  value?: number
}

export interface CounterResponse {
  count: number
}

const getApiCounter = async (): Promise<CounterResponse> => {
  const data = await fetch('/api/counter').then((res) => res.json())
  return data
}

export const CartCounter = ({ value = 0 }: Props) => {
  const count = useAppSelector((state) => state.counter.count)
  const dispatch = useAppDispatch()

  useEffect(() => {
    getApiCounter().then(({ count }) => dispatch(initCounterState(count)))
  }, [dispatch])

  return (
    <section className="flex flex-col justify-center items-center text-[#0D0D0D]  bg-[#F2F2F2] rounded-lg p-5">
      <span className="text-xl font-semibold">Productos en el carrito</span>
      <span className="text-9xl">{count}</span>
      <div className="flex gap-2">
        <button
          onClick={() => dispatch(addOne())}
          className="p3 bg-[#0B4FD9] text-neutral-100 w-[60px] rounded-lg font-semibold text-md border border-neutral-900 hover:bg-slate-800/85 hover:border-neutral-100 transition-all duration-300"
        >
          +1
        </button>
        <button
          onClick={() => dispatch(minusOne())}
          className="p3 bg-[#0B4FD9] text-neutral-100 w-[60px] rounded-lg font-semibold text-md border border-neutral-900 hover:bg-slate-800/85 hover:border-neutral-100 transition-all duration-300"
        >
          -1
        </button>
      </div>
    </section>
  )
}
