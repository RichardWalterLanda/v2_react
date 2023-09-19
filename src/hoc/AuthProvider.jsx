import { createContext, useState } from "react";
import { toast } from 'react-toastify';


export const AuthContext = createContext(null)
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const signin = (newUser, cb) => {
    if (newUser == "DAinLA") {
      setUser(newUser)
    } else {
      toast('Invalid Code!', {
        autoClose: 2000,
        className: "bg-transparent"
      })
    }

    cb();
  }
  const signout = (cb) => {
    setUser(null)
    cb()
  }

  const value = { user, signin, signout }

  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>
}
