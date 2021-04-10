import Actions from "../Actions";
import * as S from "../style";

const TableTransactions = () => {
  return (
    <S.Tables>
      <S.TableHeader>
        <h1>Histórico de transações</h1>
        <h1>Adicionar transação</h1>
      </S.TableHeader>

      <S.Table>
        <tr>
          <th>Tipo</th>
          <th>Custo</th>
          <th>Quantidade</th>
          <th>Ações</th>
        </tr>

        <tr>
          <td>
            <S.DoubleLineCell>
              <h2>Compra</h2>
              <h2>09 Abr 2021</h2>
            </S.DoubleLineCell>
          </td>
          <td>R$300.000</td>
          <td>
            <S.DoubleLineCell>
              <h2>R$2.500</h2>
              <h3>0,0345 BTC</h3>
            </S.DoubleLineCell>
          </td>
          <td>
            <Actions />
          </td>
        </tr>

        <tr>
          <td>
            <S.DoubleLineCell>
              <h2>Compra</h2>
              <h2>09 Abr 2021</h2>
            </S.DoubleLineCell>
          </td>
          <td>R$300.000</td>
          <td>
            <S.DoubleLineCell>
              <h2>R$2.500</h2>
              <h3>0,0345 BTC</h3>
            </S.DoubleLineCell>
          </td>
          <td>
            <Actions />
          </td>
        </tr>
      </S.Table>
    </S.Tables>
  );
};

export default TableTransactions;
