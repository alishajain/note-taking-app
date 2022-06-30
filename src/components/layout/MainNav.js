import { NavLink } from "react-router-dom";
import "./MainNav.scss";

const MainNavigation = () => {
  return (
    <header className="header">
      <div className="logo">Daily Notes</div>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/notes" activeClassName="active">
              All Notes
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-note" activeClassName="active">
              Add Note
            </NavLink>
          </li>
          <li>
            <NavLink to="/archieve" activeClassName="active">
              Archieve
            </NavLink>
          </li>
          <li>
            <NavLink to="/trash" activeClassName="active">
              Trash
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
