import React, { useState, useContext, useRef } from "react";
import Signup from "../Signup/Signup";

import Logo from "../../olx-logo.png";
import "./Login.css";
import { FirebaseContext } from "../../store/firebaseContext";
import { useNavigate, Link, Route, Routes } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const errorDiv = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { Firebaseapp, db } = useContext(FirebaseContext);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth(Firebaseapp);
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.log(error.message);
      errorDiv.current.textContent = "Invalid credentials";
    }
  };
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <br />
          <div>
            <h6 style={{ color: "red" }} ref={errorDiv}></h6>
          </div>
          <button>Login</button>
        </form>
        <Link to={"/signup"}>
          <a>Signup</a>
        </Link>
        <Routes>
          <Route path={"/signup"} element={<Signup />} /> 
        </Routes>
      </div>
    </div>
  );
}

export default Login;
