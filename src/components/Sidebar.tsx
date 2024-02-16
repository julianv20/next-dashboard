import Image from 'next/image'
import { IoBrowsersOutline, IoCalculator, IoLogoReact } from 'react-icons/io5'
import SidebarMenuItem from './SidebarMenuItem'
import { IoIosFootball } from 'react-icons/io'

const menuItems = [
  {
    path: '/dashboard/main',
    icon: <IoBrowsersOutline size={40} />,
    title: 'Dashboard',
    subtitle: 'Visualizacion'
  },
  {
    path: '/dashboard/counter',
    icon: <IoCalculator size={40} />,
    title: 'Counter',
    subtitle: 'Contador Client Sidebar'
  },
  {
    path: '/dashboard/pokemons',
    icon: <IoIosFootball size={40} />,
    title: 'Pokemons',
    subtitle: 'Generacion estatica'
  }
]

const Sidebar = () => {
  return (
    <div
      id="menu"
      className="bg-[#171A3B] min-h-screen  z-10 text-neutral-100 w-64  left-0 "
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="text-lg md:text-2xl font-bold text-white flex justify-center items-center">
          <IoLogoReact />
          <span>Dashboard</span>
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
              alt="User avatar"
              width={50}
              height={50}
            />
          </span>
          <span className="text-sm md:text-base font-bold">Julian Vanegas</span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.path} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Sidebar
