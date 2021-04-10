import Actions from "../Actions";
import * as S from "../style";

const TableTransactions = () => {
  return (
    <S.Tables>
      <S.TableHeader>
        <h1>Histórico de transações</h1>
        <h1>Adicionar transação</h1>
      </S.TableHeader>
      <S.SingleLineCell>
        <h1 Width="20%">Tipo</h1>
        <h1>Custo</h1>
        <h1>Quantidade</h1>
        <h1>Ações</h1>
      </S.SingleLineCell>

      <S.SingleLineCell>
        <S.DoubleLineCell>
          <h2>Compra</h2>
          <h2>09 Abr 2021</h2>
        </S.DoubleLineCell>

        <h2>R$300.000</h2>

        <S.DoubleLineCell>
          <h2>R$2.500</h2>
          <h2>0,0345 BTC</h2>
        </S.DoubleLineCell>
        <Actions />
      </S.SingleLineCell>
    </S.Tables>
  );
};

export default TableTransactions;
