import * as S from "../style";
import { useContext } from "react";
import { MyAssetsContext } from "../../../Providers/myAssets";
import { useParams } from "react-router-dom";
import formatValue from "../../../utils";
import FormEditTransaction from "../../FormEditTransaction";
import ButtonDelTransaction from "../../ButtonDelTrancation";

const TableTransactions = () => {
  const { myTransactions } = useContext(MyAssetsContext);
  const params = useParams();

  return (
    <S.Tables>
      <S.TableHeader>
        <h1>Histórico de transações</h1>
      </S.TableHeader>

      <S.Table>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Cotação Compra/Venda</th>
            <th>Custo/Quantidade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {myTransactions[params.id] &&
            myTransactions[params.id].map((coin) => (
              <tr>
                <td>
                  <S.DoubleLineCell>
                    <h2>{coin.type}</h2>
                    <h2>{coin.date}</h2>
                  </S.DoubleLineCell>
                </td>
                <td>{formatValue(coin.cost)}</td>
                <td>
                  <S.DoubleLineCell>
                    <h2>{formatValue(coin.cost * coin.qty)}</h2>
                    <h3>{coin.qty}</h3>
                  </S.DoubleLineCell>
                </td>
                <td>
                  <FormEditTransaction idTransaction={coin.id} />
                  <ButtonDelTransaction id={coin.id} />
                </td>
              </tr>
            ))}
        </tbody>
      </S.Table>
    </S.Tables>
  );
};

export default TableTransactions;
