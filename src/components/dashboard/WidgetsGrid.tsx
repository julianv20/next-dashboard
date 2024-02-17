'use client'

import { SimpleWidget } from '..'
import { IoCartOutline } from 'react-icons/io5'
import { useAppSelector } from '@/sotre'

export const WidgetsGrid = () => {
  const isCart = useAppSelector((state) => state.counter.count)
  return (
    <div className="flex flex-wrap mt-4">
      <SimpleWidget
        title={`${isCart}`}
        subTitle="Productos agregados"
        label="Contador"
        icon={<IoCartOutline />}
        href="/dashboard/counter"
      />
    </div>
  )
}
