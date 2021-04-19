import React from "react";
import { Link } from "./style";

const LinkNavBar = ({ children, ...props }) => {
  return <Link {...props}>{children}</Link>;
};

export default LinkNavBar;
