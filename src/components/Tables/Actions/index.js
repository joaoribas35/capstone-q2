import { VscEdit } from "react-icons/vsc";
import { AiOutlineDelete } from "react-icons/ai";

import * as S from "../style";
import { useHistory } from "react-router-dom";
import FormEditTransaction from "../../FormEditTransaction";

const Actions = ({ coin, idCoin }) => {
  const history = useHistory();
  return (
    <S.ActionsStyle>
      <VscEdit onClick={() => history.push(`/transactions/${coin}`)} />
      <AiOutlineDelete />
      <FormEditTransaction idTransaction={idCoin} />
    </S.ActionsStyle>
  );
};

export default Actions;
