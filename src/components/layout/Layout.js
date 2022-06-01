import { Fragment } from "react";

import MainNavigation from "./MainNav";
import classes from './Layout.module.css';

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;