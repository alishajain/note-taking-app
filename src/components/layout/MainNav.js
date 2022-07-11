import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import "./MainNav.scss";
import AuthContext from "../../store/auth-context";

const MainNavigation = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <nav className="nav">
      <div className="logo">Daily Notes</div>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <img src={require("./menu_icon.jpg")} alt="alisha" />
      </button>
      <ul className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
        {!isLoggedIn && (
          <li>
            <NavLink to="/auth" activeClassName="active">
              Login
            </NavLink>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <NavLink to="/profile" activeClassName="active">
              Profile
            </NavLink>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <NavLink to="/notes" activeClassName="active">
              All Notes
            </NavLink>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <NavLink to="/new-note" activeClassName="active">
              Add Note
            </NavLink>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <NavLink to="/archieve" activeClassName="active">
              Archieve
            </NavLink>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <NavLink to="/trash" activeClassName="active">
              Trash
            </NavLink>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <button className="button" onClick={logoutHandler}>
              Logout
            </button>
          </li>
        )}
      </ul>
    
    </nav>
  );
};

export default MainNavigation;
