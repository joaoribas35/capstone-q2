import * as S from "../style";
import Symbol from "../Symbol";

import formatValue from "../../../utils";

const TableRebalance = ({ myAssets, totalBalance }) => {
  return (
    <S.Tables>
      <S.Table>
        <thead>
          <tr>
            <th>Ativo</th>
            <th>Ideal</th>
            <th>Atual</th>
            <th>Diferença</th>
            <th>Desvio</th>
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
                      <S.DoubleLineCell>
                        <h2>
                          {formatValue(
                            (
                              (myAssets[value].portfolio * totalBalance) /
                              100
                            ).toFixed(2)
                          )}
                        </h2>
                        <h3>
                          {(
                            (myAssets[value].portfolio * totalBalance) /
                            100 /
                            myAssets[value].api_data.brl
                          ).toFixed(5)}
                        </h3>
                      </S.DoubleLineCell>
                    </td>
                    <td>
                      <S.DoubleLineCell>
                        <h2>
                          {formatValue(
                            myAssets[value].api_data.brl *
                              myAssets[value].sum_qty.toFixed(2)
                          )}
                        </h2>
                        <h3>{myAssets[value].sum_qty.toFixed(5)}</h3>
                      </S.DoubleLineCell>
                    </td>
                    <td>
                      <S.DoubleLineCell>
                        <h2>
                          {formatValue(
                            (
                              myAssets[value].api_data.brl *
                                myAssets[value].sum_qty -
                              (myAssets[value].portfolio * totalBalance) / 100
                            ).toFixed(2)
                          )}
                        </h2>
                        <h3>
                          {(
                            myAssets[value].sum_qty -
                            (myAssets[value].portfolio * totalBalance) /
                              100 /
                              myAssets[value].api_data.brl
                          ).toFixed(5)}
                        </h3>
                      </S.DoubleLineCell>
                    </td>
                    <td>
                      {(
                        (myAssets[value].sum_qty /
                          ((myAssets[value].portfolio * totalBalance) /
                            100 /
                            myAssets[value].api_data.brl -
                            1)) *
                        100
                      ).toFixed(2)}
                      %
                    </td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </S.Table>
    </S.Tables>
  );
};
export default TableRebalance;
