import { useState } from "react";
import { AuthRegister, AuthLogin } from "./Auth";
import { auth } from "../config/firebase-config";
import { onAuthStateChanged } from "firebase/auth";

function LoginForm() {
  const [login, setLogin] = useState(true);
  const userName = onAuthStateChanged(auth, (user) => {
    if (user) {
      return user.displayName;
    }
  });
 
  return (
    <div className="d-flex align-items-center justify-content-center h-100">
      <div>
        {login? <AuthLogin login={login} setLogin = {setLogin}/> : <AuthRegister  login={login} setLogin = {setLogin}/>}
      </div>
    </div>
  );
}

export default LoginForm;
