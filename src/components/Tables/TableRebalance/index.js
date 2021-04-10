import * as S from "../style";
import Symbol from "../Symbol";

const TableRebalance = () => {
  return (
    <S.Tables>
      <S.SingleLineCell>
        <h1 Width="20%">Ativo</h1>
        <h1>Ideal</h1>
        <h1>Atual</h1>
        <h1>Desvio</h1>
        <h1>Comprar/Vender</h1>
      </S.SingleLineCell>

      <S.SingleLineCell>
        <Symbol />
        <S.DoubleLineCell>
          <h2>R$2.500</h2>
          <h2>25%</h2>
        </S.DoubleLineCell>
        <S.DoubleLineCell>
          <h2>R$2.625</h2>
          <h2>30%</h2>
        </S.DoubleLineCell>
        <S.DoubleLineCell>
          <h2>+R$125</h2>
          <h2>+5%</h2>
        </S.DoubleLineCell>
        <h2>-0,00125</h2>
      </S.SingleLineCell>

      <S.SingleLineCell>
        <Symbol />
        <S.DoubleLineCell>
          <h2>R$2.500</h2>
          <h2>25%</h2>
        </S.DoubleLineCell>
        <S.DoubleLineCell>
          <h2>R$2.625</h2>
          <h2>30%</h2>
        </S.DoubleLineCell>
        <S.DoubleLineCell>
          <h2>+R$125</h2>
          <h2>+5%</h2>
        </S.DoubleLineCell>
        <h2>-0,00125</h2>
      </S.SingleLineCell>

      <S.SingleLineCell>
        <Symbol />
        <S.DoubleLineCell>
          <h2>R$2.500</h2>
          <h2>25%</h2>
        </S.DoubleLineCell>
        <S.DoubleLineCell>
          <h2>R$2.625</h2>
          <h2>30%</h2>
        </S.DoubleLineCell>
        <S.DoubleLineCell>
          <h2>+R$125</h2>
          <h2>+5%</h2>
        </S.DoubleLineCell>
        <h2>-0,00125</h2>
      </S.SingleLineCell>
    </S.Tables>
  );
};

export default TableRebalance;
