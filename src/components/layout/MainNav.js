import { NavLink } from "react-router-dom";

import classes from "./MainNav.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Daily Notes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/notes" activeClassName={classes.active}>
              All Notes
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-note" activeClassName={classes.active}>
              Add Note
            </NavLink>
          </li>
          <li>
            <NavLink to="/trash" activeClassName={classes.active}>
              Trash
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
