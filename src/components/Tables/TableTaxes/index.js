import * as S from "../style";

const TableTaxes = () => {
  return (
    <S.Tables>
      <S.SingleLineCell>
        <h1 Width="20%">Mês</h1>
        <h1>Movimentação no exterior</h1>
        <h1>Total de vendas</h1>
        <h1>Lucro/Prejuízo</h1>
        <h1>Imposto devido</h1>
      </S.SingleLineCell>

      <S.SingleLineCell>
        <h2>Janeiro</h2>
        <h2>R$20.000</h2>
        <h2>R$20.000</h2>
        <h2>+R$2.000</h2>
        <h2>R$300</h2>
      </S.SingleLineCell>

      <S.SingleLineCell>
        <h2>Fevereiro</h2>
        <h2>R$20.000</h2>
        <h2>R$20.000</h2>
        <h2>+R$2.000</h2>
        <h2>R$300</h2>
      </S.SingleLineCell>

      <S.SingleLineCell>
        <h2>Março</h2>
        <h2>R$20.000</h2>
        <h2>R$20.000</h2>
        <h2>+R$2.000</h2>
        <h2>R$300</h2>
      </S.SingleLineCell>
    </S.Tables>
  );
};

export default TableTaxes;
