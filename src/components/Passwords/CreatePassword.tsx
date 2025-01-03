// create password is meant to be used in the sidebar to open a dialog

import { Plus, X } from "lucide-react";
import { useState } from "react";
import Dialog from "../Dialog";

export default function CreatePassword() {

  const [isOpen, setIsOpen] = useState(false)

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit() {
    console.table({ name, password })
  }

  return <>
    <Plus
      onClick={() => setIsOpen(true)}
      className="stroke-zinc-400 hover:stroke-zinc-50 hover:cursor-pointer transition-all" />
    <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)} >
      <div className="w-full h-full flex flex-col justify-between gap-10 " >
        <div className="flex w-full justify-between" >
          <h1 className="text-xl" >Create a new password</h1>
          <X onClick={() => setIsOpen(false)} className="stroke-zinc-400 hover:stroke-zinc-50 hover:cursor-pointer transition-all" />
        </div>
        <div className="flex flex-col justify-start gap-5 bg-zinc-950 text-zinc-50 " >
          <label htmlFor="name" >Name</label>
          <input id="name" type="text" placeholder="Github"
            className="bg-zinc-950 p-2 border border-dashed border-zinc-50 focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-start gap-5 bg-zinc-950 text-zinc-50 " >
          <label htmlFor="password" >Password</label>
          <input id="password" type="password"
            className="bg-zinc-950 p-2 border border-dashed border-zinc-50 focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>Leave empty to have a random password generated.</p>
        </div>
        <span className="flex-1" ></span>
        <div className="flex justify-end" >
          <button
            disabled={!name}
            onClick={handleSubmit}
            className="border border-dashed text-zinc-400 border-zinc-400 p-2 
            hover:border-zinc-50 hover:text-zinc-50 transition-all
            " >Generate</button>
        </div>
      </div>
    </Dialog>
  </>
}
