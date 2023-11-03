import React,{ useContext } from 'react';
import { getAuth, signOut } from 'firebase/auth';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/firebaseContext';
import { useNavigate, Link, Route, Routes } from 'react-router-dom';
import Create from '../Create/Create';

function Header() {

  const { Firebaseapp } = useContext(FirebaseContext)
  const auth = getAuth(Firebaseapp)
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text"
          placeholder="Search specific product...          " />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff" placeholder="Find car,mobile phone and more..."></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <Link to="/login">
          <div className="loginPage">
            <span>{user ? user.displayName : 'Login'}</span>
            <hr />
          </div>
        </Link>


         { user && <span onClick={async () => {
          await signOut(auth)
          navigate('/login')
         }}>Logout</span>}
         <Link to={'create'}>
        { user && <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>}
        </Link>
        <Routes>
        <Route path={'/create'} element={<Create/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default Header;
