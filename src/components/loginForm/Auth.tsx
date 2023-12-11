import { auth, googleProvider } from "../../config/firebase-config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { MouseEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

export function AuthRegister({login, setLogin} : {login: boolean, setLogin: any}) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = async (e: MouseEvent) => {
    e.preventDefault();
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(user, { displayName: username });
      setEmail("");
      setUsername("");
      setPassword("");
    } catch (error: any) {
      alert(error.message);
    }
  };
  const handleRegisterWithGoogle = async (e: MouseEvent) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error: any) {
      alert(error.message);
    }
    alert("Login with Google with user name: " + auth.currentUser?.displayName);
  };
  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="exampleInputUsername1" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            value={username}
            id="exampleInputUsername1"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button
            type="button"
            className="btn btn-outline-danger mb-3"
            onClick={handleRegisterWithGoogle}
          >
            <FontAwesomeIcon icon={faGoogle} /> Sign in with Google
          </button>
        </div>
        <div className="d-flex gap-3">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleRegister}
          >
            Register
          </button>
          <button type="button" className="btn btn-success" onClick={() => setLogin(true)} >
            Have an account? Log in
          </button>
        </div>
      </form>
    </>
  );
}

export function AuthLogin({login, setLogin} : {login: boolean, setLogin: any}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e: MouseEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
      setLogin(true);
    } catch (error: any) {
      console.log(error.message);
      alert(error.message);
    }
  }
  const handleRegisterWithGoogle = async (e: MouseEvent) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error: any) {
      alert(error.message);
    }
    alert("Login with Google with user name: " + auth.currentUser?.displayName);
  };
  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="button" className="btn btn-outline-danger mb-3" onClick={handleRegisterWithGoogle} >
            <FontAwesomeIcon icon={faGoogle}/> Sign in with Google
          </button>
        </div>
        <div className="d-flex gap-3">
          <button type="button" className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
          <button type="button" className="btn btn-danger" onClick={() => setLogin(false)} >
            Don't have an account? Sign Up
          </button>
        </div>
      </form>
    </>
  );
}
