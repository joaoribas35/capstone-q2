import { VscEdit } from "react-icons/vsc";

import * as S from "../style";
import { useHistory } from "react-router-dom";

const Actions = ({ idCoin }) => {
  const history = useHistory();
  return (
    <S.ActionsStyle>
      <VscEdit onClick={() => history.push(`/transactions/${idCoin}`)} />
    </S.ActionsStyle>
  );
};

export default Actions;
