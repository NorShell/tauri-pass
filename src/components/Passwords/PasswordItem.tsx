import { Pen, Trash } from "lucide-react"
import { Password } from "./PasswordsList"

interface Props {
  password: Password
}

function PasswordItem({ password }: Props) {
  return <ul className="
    box-border w-full p-5 border-zinc-900 border-b border-dashed
    flex items-start justify-center gap-5
    " >
    <span>{password.name}</span>
    <span className="flex-1" ></span>
    <Pen className="stroke-zinc-400 hover:stroke-zinc-50 hover:cursor-pointer transition-all" />
    <Trash className="stroke-zinc-400 hover:stroke-zinc-50 hover:cursor-pointer transition-all" />
  </ul>
}

export default PasswordItem
