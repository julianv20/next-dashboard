import { SimpleWidget, WidgetsGrid } from '@/components'

const MainPage = () => {
  return (
    <div className="text-black">
      <h1 className="mt-2 text-3xl text-neutral-100">Dashboard</h1>
      <span className="text-xl text-neutral-100">Informacion general</span>
      <WidgetsGrid />
    </div>
  )
}

export default MainPage
