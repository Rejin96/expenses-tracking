import { createContext, useEffect , useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user,setUser] = useState(null);
  useEffect(() =>{
    let token = localStorage.getItem("token");
    if(token){
      setUser(token);
    }
  },[]);
  return <AuthContext.Provider value={{user,setUser}}>{children}</AuthContext.Provider>;
}

export default AuthProvider;