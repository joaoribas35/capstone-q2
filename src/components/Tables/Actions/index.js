import { VscEdit } from "react-icons/vsc";
import { AiOutlineDelete } from "react-icons/ai";

import { ActionsStyle } from "./style";

const Actions = () => {
  return (
    <ActionsStyle>
      <VscEdit />
      <AiOutlineDelete />
    </ActionsStyle>
  );
};

export default Actions;
