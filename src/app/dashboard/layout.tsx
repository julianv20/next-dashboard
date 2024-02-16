import Sidebar from '../../components/Sidebar'

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="flex">
        <Sidebar />
        <div className="p-5 w-full bg-[#BFBFB8] text-neutral-100 min-h-screen">
          {children}
        </div>
      </div>
    </div>
  )
}
