import { useState } from "react";
import PasswordItem from "./PasswordItem"
import Dialog from "../Dialog";

export interface Password {
  name: string,
  password: string
}

const passwords: Password[] = [
  { name: "Github", password: "secretStuff" },
  { name: "X", password: "secretStuff" },
  { name: "Reddit", password: "secretStuff" },
  { name: "Gmail", password: "secretStuff" }
]


function PasswordList() {

  const [isOpen, setIsOpen] = useState(false);


  return <div className="w-full" >
    <h1 className="text-2xl mb-10 ">Passwords</h1>
    <ul className="w-full" >{
      passwords.map((password) => (
        <PasswordItem password={password} key={password.name} />
      ))
    }
    </ul>
    <button onClick={() => setIsOpen(true)} >Open Dialog</button>
    <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <h2>Dummy dialog</h2>
    </Dialog>

  </div>

}

export default PasswordList
