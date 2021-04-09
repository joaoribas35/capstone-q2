import React, { useState } from "react";
import ContainerToggle from "../ContainerToggle";
import NavBar from "../NavBar";

const MenuNavBar = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  return (
    <>
      <ContainerToggle setIsShowMenu={setIsShowMenu} isShowMenu={isShowMenu} />
      <NavBar isShowMenu={isShowMenu} />
    </>
  );
};

export default MenuNavBar;
