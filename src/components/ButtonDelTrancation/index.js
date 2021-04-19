import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { ServerJsonApi } from "../../services/api";
import { ModalBox, ModalBackground, ModalButton } from "./styles";
import { GetTransactionsContext } from "../../Providers/getTransactions";
import { useContext } from "react";

const ButtonDelTransaction = ({ id }) => {
  const [ConfirmModal, setConfirModal] = useState(false);
  const token = localStorage.getItem("token");

  const { loadTransactions } = useContext(GetTransactionsContext);

  const handleClick = () => {
    ServerJsonApi.delete(`/transactions/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(() => loadTransactions());

    setConfirModal(false);
  };

  return (
    <>
      <AiOutlineDelete onClick={() => setConfirModal(true)} />
      {ConfirmModal && (
        <ModalBackground>
          <ModalBox>
            <h1>Você realmente deseja excluir essa transação?</h1>
            <div>
              <ModalButton onClick={() => handleClick()}>SIM</ModalButton>
              <ModalButton onClick={() => setConfirModal(false)}>
                NÃO
              </ModalButton>
            </div>
          </ModalBox>
        </ModalBackground>
      )}
    </>
  );
};

export default ButtonDelTransaction;
