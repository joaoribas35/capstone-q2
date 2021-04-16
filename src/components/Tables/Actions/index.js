import { VscEdit } from "react-icons/vsc";
import { AiOutlineDelete } from "react-icons/ai";

import { ActionsStyle } from "./style";
import { useHistory } from "react-router-dom";
import FormEditTransaction from "../../FormEditTransaction";

const Actions = ({ coin, idCoin }) => {
  const history = useHistory();
  return (
    <ActionsStyle>
      <VscEdit onClick={() => history.push(`/transactions/${coin}`)} />
      <AiOutlineDelete />
      <FormEditTransaction idTransaction={idCoin} />
    </ActionsStyle>
  );
};

export default Actions;
