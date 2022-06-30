import { Fragment } from "react";

import MainNavigation from "./MainNav";
import './Layout.scss';

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className="main">{props.children}</main>
    </Fragment>
  );
};

export default Layout;
