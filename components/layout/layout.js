import { Fragment } from "react";
import MainNavigation from "./main-navigation";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <MainNavigation />
      {children}
    </Fragment>
  );
};

export default Layout;
