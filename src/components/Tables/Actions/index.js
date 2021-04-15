import { VscEdit } from "react-icons/vsc";
import { AiOutlineDelete } from "react-icons/ai";

import { ActionsStyle } from "./style";
import { useHistory } from "react-router-dom";

const Actions = ({ coin }) => {
  const history = useHistory();
  return (
    <ActionsStyle>
      <VscEdit onClick={() => history.push(`/transactions/${coin}`)} />
      <AiOutlineDelete />
    </ActionsStyle>
  );
};

export default Actions;
