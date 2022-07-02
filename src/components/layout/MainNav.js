import { useContext } from "react";
import { NavLink } from "react-router-dom";

import "./MainNav.scss";
import AuthContext from "../../store/auth-context";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    console.log("alisha");
    authCtx.logout();
  };

  return (
    <header className="header">
      <div className="logo">Daily Notes</div>

      <nav className="nav">
        <ul>
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
              <button onClick={logoutHandler}>Logout</button>
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
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
