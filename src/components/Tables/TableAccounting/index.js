import * as S from "../style";
import formatValue from "../../../utils";

const TableAccounting = ({ totals }) => {
  return (
    <S.Tables>
      <S.Table>
        <thead>
          <tr>
            <th>Mês</th>
            <th>Movimentação no exterior</th>
            <th>Total de vendas</th>
            <th>Lucro/Prejuízo</th>
            <th>Imposto devido</th>
          </tr>
        </thead>
        <tbody>
          {totals &&
            Object.values(totals).map((value, i) => {
              return (
                <tr key={i}>
                  <S.Capitalize>{Object.keys(totals)[i]}</S.Capitalize>
                  <td>{formatValue(value.trades.toFixed(2))}</td>
                  <td>{formatValue(value.sum_sell.toFixed(2))}</td>
                  <td>{formatValue(value.profit_loss.toFixed(2))}</td>
                  <td>
                    {formatValue(
                      (value.sum_sell > 35000 && value.profit_loss > 0
                        ? value.profit_loss * 0.15
                        : 0
                      ).toFixed(2)
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </S.Table>
    </S.Tables>
  );
};

export default TableAccounting;
