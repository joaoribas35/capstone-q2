import React, { useState } from "react";
import ContainerToggle from "../../molecules/ContainerToggle";
import NavBar from "../../molecules/NavBar";

const MenuNavBar = () => {
  const [isShowMenu, setIsShowMenu] = useState(true);

  return (
    <>
      <ContainerToggle setIsShowMenu={setIsShowMenu} isShowMenu={isShowMenu} />
      <NavBar isShowMenu={isShowMenu} />
    </>
  );
};

export default MenuNavBar;
