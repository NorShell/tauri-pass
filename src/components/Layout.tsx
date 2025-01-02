import { ReactNode } from "react"
import Sidebar from "./SideBar"

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return <main className="
    w-full h-screen bg-zinc-950 text-zinc-50 box-border p-5 flex 
    " >
    <Sidebar />
    <section className="p-5" >
      {children}
    </section>
  </main>
}
