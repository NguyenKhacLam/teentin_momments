import React, { useState, useEffect } from "react";
import "./../styles/Header.css";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { auth } from "./../firebase/firebase";
import { actionTypes } from "./../context/reducer";
import { useStateValue } from "./../context/StateProvider";

function Header() {
  const [user, setUser] = useState();
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((userInfo) => {
      setUser(userInfo);
      dispatch({
        type: actionTypes.SET_USER,
        user: userInfo,
      });
    });
  }, []);

  const logOut = () => {
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <img
            src="https://teentin.com/wp-content/uploads/2020/04/logo-black-scaled.jpg"
            alt=""
          />
        </Link>
      </div>
      <div className="header__menu">
        {user ? (
          <div className="header__menuLogined">
            <Link to="/upload">Upload</Link>
            <button onClick={logOut}>Logout</button>
            <div className="header_menuAvatat">
              <Avatar alt={user?.displayName} src={user?.photoURL} />
            </div>
          </div>
        ) : (
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/upload">Upload</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Header;
