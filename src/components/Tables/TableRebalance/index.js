import * as S from "../style";
import Symbol from "../Symbol";

const TableRebalance = () => {
  return (
    <S.Tables>
      <S.Table>
        <tr>
          <th>Ativo</th>
          <th>Ideal</th>
          <th>Atual</th>
          <th>Desvio</th>
          <th>Comprar/Vender</th>
        </tr>

        <tr>
          <td>
            <Symbol />
          </td>
          <td>
            <S.DoubleLineCell>
              <h2>R$2.500</h2>
              <h3>0,0345 BTC</h3>
            </S.DoubleLineCell>
          </td>
          <td>
            <S.DoubleLineCell>
              <h2>R$2.650</h2>
              <h3>0,0345 BTC</h3>
            </S.DoubleLineCell>
          </td>
          <td>
            <S.DoubleLineCell>
              <h2>R$125</h2>
              <h3>0,0345 BTC</h3>
            </S.DoubleLineCell>
          </td>
          <td>0,00125</td>
        </tr>

        <tr>
          <td>
            <Symbol />
          </td>
          <td>
            <S.DoubleLineCell>
              <h2>R$2.500</h2>
              <h3>0,0345 BTC</h3>
            </S.DoubleLineCell>
          </td>
          <td>
            <S.DoubleLineCell>
              <h2>R$2.650</h2>
              <h3>0,0345 BTC</h3>
            </S.DoubleLineCell>
          </td>
          <td>
            <S.DoubleLineCell>
              <h2>R$125</h2>
              <h3>0,0345 BTC</h3>
            </S.DoubleLineCell>
          </td>
          <td>0,00125</td>
        </tr>
      </S.Table>
    </S.Tables>
  );
};

export default TableRebalance;
