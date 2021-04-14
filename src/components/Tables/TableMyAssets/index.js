import Actions from "../Actions";
import * as S from "../style";
import Symbol from "../Symbol";
import { useContext, useEffect, useState } from "react";
import { MyAssetsContext } from "../../../Providers/myAssets";
import { GetPriceContext } from "../../../Providers/getPrice";

const TableMyAssets = () => {
  const { myCoins, myTransactions, myAssets } = useContext(MyAssetsContext);
  const { getPrice } = useContext(GetPriceContext);
  const [loading, setLoading] = useState(true);

  console.log("Dashboard", myAssets);
  console.log("Dashboard", myCoins);
  console.log("Dashboard", myTransactions);

  for (let i in Object.keys(myAssets)) {
    for (let j in Object.keys(getPrice)) {
      if (Object.keys(myAssets)[i] === Object.keys(getPrice)[j]) {
        myAssets[Object.keys(myAssets)[i]].api_data = Object.values(getPrice)[
          j
        ];
      }
    }
  }

  useEffect(() => {
    setLoading(false);
  }, [getPrice]);

  console.log("dasboard", myAssets);

  if (loading) {
    return <div></div>;
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
                    <tr>
                      <td>
                        <Symbol coin={value} />
                      </td>
                      <td>{myAssets[value].avg_cost.toFixed(2)}</td>
                      <td>{myAssets[value].api_data.brl.toFixed(2)}</td>
                      <td>
                        {myAssets[value].api_data.brl_24h_change.toFixed(2)}%
                      </td>
                      <td>
                        <S.DoubleLineCell>
                          <h2>
                            {(
                              myAssets[value].sum_qty *
                              myAssets[value].api_data.brl
                            ).toFixed(2)}
                          </h2>
                          <h3>{myAssets[value].sum_qty.toFixed(5)}</h3>
                        </S.DoubleLineCell>
                      </td>
                      <td>
                        {(
                          (myAssets[value].api_data.brl -
                            myAssets[value].avg_cost) *
                          myAssets[value].sum_qty
                        ).toFixed(2)}
                      </td>
                      <td>
                        <Actions />
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
