import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import "./MainNav.scss";
import AuthContext from "../../store/auth-context";

const links =[
  {
    name:"Profile",
    path:"/profile"
  },
  {
    name:"All notes",
    path:"/notes"
  },
  {
    name:"Add note",
    path:"/new-note"
  },
  {
    name:"Archieve",
    path:"/archieve"
  },
  {
    name:"Trash",
    path:"/trash"
  }
]

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
          links.map(element => (
          <li>
            <NavLink to={element.path} activeClassName="active">
              {element.name}
            </NavLink>
          </li> 
          ))
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
