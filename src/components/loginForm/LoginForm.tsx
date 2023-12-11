import { useEffect, useState } from "react";
import { AuthRegister, AuthLogin } from "./Auth";
import { auth } from "../../config/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [login, setLogin] = useState(true);
  const navigate = useNavigate();
  useEffect(() =>{
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/tasks");
      } else {
        navigate("/login");
      }
    });
  }, [login]);

  return (
    <div className="d-flex" style={{ flex: 1 }}>
      <div className="d-flex justify-content-center">
        <div>
          {login? <AuthLogin login={login} setLogin = {setLogin}/> : <AuthRegister  login={login} setLogin = {setLogin}/>}
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
