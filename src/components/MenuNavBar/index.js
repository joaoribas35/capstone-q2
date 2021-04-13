import React, { useState } from "react";
import ContainerToggle from "../ContainerToggle";
import NavBar from "../NavBar";

import TopBar from "../TopBar";

const MenuNavBar = () => {
  const [isShowMenu, setIsShowMenu] = useState(true);

  return (
    <>
      <ContainerToggle setIsShowMenu={setIsShowMenu} isShowMenu={isShowMenu} />
      <NavBar isShowMenu={isShowMenu} />
      <TopBar />
    </>
  );
};

export default MenuNavBar;
