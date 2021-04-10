import Actions from "../Actions";
import * as S from "../style";
import Symbol from "../Symbol";

const TableMyAssets = () => {
  return (
    <S.Tables>
      <S.TableHeader>
        <h1>Meus ativos</h1>
        <h1>Adicionar transação</h1>
      </S.TableHeader>

      <S.Table>
        <tr>
          <th>Ativo</th>
          <th>Preço médio</th>
          <th>preço atual</th>
          <th>24h</th>
          <th>Posição</th>
          <th>Lucro/Prejuízo</th>
          <th>Ações</th>
        </tr>

        <tr>
          <td>
            <Symbol />
          </td>
          <td>R$300.000</td>
          <td>R$315.000</td>
          <td>+2,00%</td>
          <td>
            <S.DoubleLineCell>
              <h2>R$2.500</h2>
              <h3>0,0345 BTC</h3>
            </S.DoubleLineCell>
          </td>
          <td>+R$200</td>
          <td>
            <Actions />
          </td>
        </tr>
      </S.Table>
    </S.Tables>
  );
};

export default TableMyAssets;
