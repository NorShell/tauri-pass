import CustomCreateShell from "../CustomCreateShell"
import PasswordItem from "./PasswordItem"

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


  return <div className="w-full" >
    <h1 className="text-2xl mb-10 ">Passwords</h1>
    <ul className="w-full" >{
      passwords.map((password) => (
        <PasswordItem password={password} key={password.name} />
      ))
    }
    </ul>

    <CustomCreateShell />

  </div>

}

export default PasswordList
