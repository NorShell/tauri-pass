import { Sun } from "lucide-react"
import CreatePassword from "./Passwords/CreatePassword"

export default function Sidebar() {

  return <aside className="
    h-full w-1/12 border-zinc-400 border-r border-dashed flex flex-col items-center p-10 gap-10 box-border justify-start
    ">
    <h1 className="text-center font-bold text-xl " >Tauri Pass</h1>
    <CreatePassword />
    <Sun className="stroke-zinc-400 hover:stroke-zinc-50 hover:cursor-pointer transition-all" />
  </aside>
}
