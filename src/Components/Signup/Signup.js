import React, { useContext, useState } from 'react';
import Login from '../Login/Login';

import Logo from '../../olx-logo.png'; 
import './Signup.css';
import { FirebaseContext } from '../../store/firebaseContext'; 
import { createUserWithEmailAndPassword, getAuth,updateProfile } from "firebase/auth";
import {collection, addDoc} from 'firebase/firestore'
import { Link, useNavigate, Routes, Route } from "react-router-dom";




export default function Signup() {

  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ mobile, setMobile ] = useState('')

  const navigate=useNavigate()
  const {Firebaseapp,db}=useContext(FirebaseContext)

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const auth = getAuth(Firebaseapp);
  
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        updateProfile(user, {displayName: username});
  
        addDoc(collection(db, "users"), {
          id: userCredential.user.uid,
          email,
          password,
          mobile,
          username,
        });
  
        navigate("/login");
      })
      .catch((err) => {
        console.log(err.code);
        alert(err.code);
      });
  };
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            
            onChange={(e) => setMobile(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
      

        <Link to={'/login'}>
          <a>Login</a>
        </Link>
          <Routes>
            <Route path={'/login'}  element={<Login/>}/>
          </Routes>
     
      </div>
    </div>
  );
}
