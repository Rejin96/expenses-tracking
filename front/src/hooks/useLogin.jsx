import axios from "axios";
import { useAuth } from "./useAuth"; 

function useLogin() {
  const {setUser} = useAuth();
  function login(email, password) {
    let data = {
      email,
      password,
    };
    console.log(data);
    axios
      .post("/api/user/login", data)
      .then((resp) => {
        localStorage.setItem("token",resp.data.token);
        setUser(resp.data.token);
    })
      .catch((err) => alert(err.response.data.error));
  }
  return { login };
}

export default useLogin;
