import Actions from "../Actions";
import * as S from "../style";
import Symbol from "../Symbol";
import { useState, useEffect } from "react";
import formatValue from "../../../utils";

import FormAddTransaction from "../../FormAddTransaction";

const TableMyAssets = ({ myAssets }) => {
  const [loading, setLoading] = useState(true);

  console.log("MyAssesTableeMyAssets", myAssets);

  useEffect(() => {
    setLoading(false);
  }, [myAssets]);

  function isEmpty(obj) {
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) return true;
    }

    return false;
  }

  if (loading) {
    return <div>deu ruim</div>;
  } else {
    return (
      <S.Tables>
        <S.TableHeader>
          <h1>Meus ativos</h1>
          <S.Div>
            <h1>Adicionar transação</h1>
            <FormAddTransaction />
          </S.Div>
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
            {isEmpty(myAssets) &&
              Object.keys(myAssets).map((value, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <Symbol coin={value} />
                    </td>
                    <td>{formatValue(myAssets[value].avg_cost)}</td>
                    <td>{formatValue(myAssets[value].api_data.brl)}</td>
                    <td
                      style={
                        myAssets[value].api_data.brl_24h_change.toFixed(2) > 0
                          ? { color: "#5dd098", fontWeight: "bold" }
                          : { color: "#ea4543", fontWeight: "bold" }
                      }
                    >
                      {myAssets[value].api_data.brl_24h_change.toFixed(2)}%
                    </td>
                    <td>
                      <S.DoubleLineCell>
                        <h2>
                          {formatValue(
                            myAssets[value].sum_qty *
                              myAssets[value].api_data.brl
                          )}
                        </h2>
                        <h3>{Number(myAssets[value].sum_qty).toFixed(5)}</h3>
                      </S.DoubleLineCell>
                    </td>
                    <td
                      style={
                        (myAssets[value].api_data.brl -
                          myAssets[value].avg_cost) *
                          myAssets[value].sum_qty >
                        0
                          ? { color: "#5dd098", fontWeight: "bold" }
                          : { color: "#ea4543", fontWeight: "bold" }
                      }
                    >
                      {formatValue(
                        (myAssets[value].api_data.brl -
                          myAssets[value].avg_cost) *
                          myAssets[value].sum_qty
                      )}
                    </td>
                    <td>
                      <Actions idCoin={value} />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </S.Table>
      </S.Tables>
    );
  }
};

export default TableMyAssets;
