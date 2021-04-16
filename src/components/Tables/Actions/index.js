import { VscEdit } from "react-icons/vsc";
import { AiOutlineDelete } from "react-icons/ai";

import * as S from "../style";
import { useHistory } from "react-router-dom";

const Actions = ({ coin }) => {
  const history = useHistory();
  return (
    <S.ActionsStyle>
      <VscEdit onClick={() => history.push(`/transactions/${coin}`)} />
      <AiOutlineDelete />
    </S.ActionsStyle>
  );
};

export default Actions;
