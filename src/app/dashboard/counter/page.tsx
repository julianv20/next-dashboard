import { CartCounter } from '@/shopping-cart'

export const metadata = {
  title: 'Shopping Cart',
  description: 'Counter Page description'
}

const CounterPage = () => {
  
  return (
    <div className="flex justify-center items-center w-full h-full">
      <CartCounter />
    </div>
  )
}

export default CounterPage
