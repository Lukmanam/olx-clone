import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useContext } from "react";

import Home from "./Pages/Home";
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import Create from './Pages/Create';
import SingleProductView from './Components/Posts/viewsingle'
import Post from './store/postContext';


import { AuthContext, FirebaseContext } from './store/firebaseContext';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import ViewPost from "./Pages/ViewPost";


function App() {

  const {setUser}=useContext(AuthContext)
  const{Firebaseapp}=useContext(FirebaseContext)

  useEffect(()=>{
    const auth = getAuth(Firebaseapp);
    onAuthStateChanged(auth, (user) => {
    setUser(user)
  });
})
  return (
    <div>
    <Post>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/create" element={<Create/>} />
          <Route path="/details" element={<ViewPost />} />
        </Routes>
      </Router>
      </Post>
    </div>
  );
}

export default App;
