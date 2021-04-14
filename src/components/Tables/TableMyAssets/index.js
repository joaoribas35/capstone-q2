import Actions from "../Actions";
import * as S from "../style";
import Symbol from "../Symbol";
import { useState, useEffect } from "react";
import formatValue from "../../../utils";

const TableMyAssets = ({ myAssets }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [myAssets]);

  if (loading) {
    return <div>deu ruim</div>;
  } else {
    return (
      <S.Tables>
        <S.TableHeader>
          <h1>Meus ativos</h1>
          <h1>Adicionar transação</h1>
        </S.TableHeader>

        <S.Table>
          <thead>
            <tr>
              <th>Ativo</th>
              <th>Preço médio</th>
              <th>preço atual</th>
              <th>24h</th>
              <th>Posição</th>
              <th>Lucro/Prejuízo</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {myAssets &&
              Object.keys(myAssets).map((value, i) => {
                return (
                  <>
                    <tr key={i}>
                      <td>
                        <Symbol coin={value} />
                      </td>
                      <td>
                        {formatValue(myAssets[value].avg_cost.toFixed(2))}
                      </td>
                      <td>
                        {formatValue(myAssets[value].api_data.brl.toFixed(2))}
                      </td>
                      <td>
                        {myAssets[value].api_data.brl_24h_change.toFixed(2)}%
                      </td>
                      <td>
                        <S.DoubleLineCell>
                          <h2>
                            {formatValue(
                              (
                                myAssets[value].sum_qty *
                                myAssets[value].api_data.brl
                              ).toFixed(2)
                            )}
                          </h2>
                          <h3>{myAssets[value].sum_qty.toFixed(5)}</h3>
                        </S.DoubleLineCell>
                      </td>
                      <td>
                        {formatValue(
                          (
                            (myAssets[value].api_data.brl -
                              myAssets[value].avg_cost) *
                            myAssets[value].sum_qty
                          ).toFixed(2)
                        )}
                      </td>
                      <td>
                        <Actions coin={value} />
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </S.Table>
      </S.Tables>
    );
  }
};

export default TableMyAssets;
