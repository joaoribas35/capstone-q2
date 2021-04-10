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
      <S.SingleLineCell>
        <h1 Width="20%">Ativo</h1>
        <h1>Preço médio</h1>
        <h1>preço atual</h1>
        <h1>24h</h1>
        <h1>Posição</h1>
        <h1>Lucro/Prejuízo</h1>
        <h1>Ações</h1>
      </S.SingleLineCell>

      <S.SingleLineCell>
        <Symbol />
        <h2>R$300.000</h2>
        <h2>R$315.000</h2>
        <h2>+2,00%</h2>
        <S.DoubleLineCell>
          <h2>R$2.500</h2>
          <h2>0,0345 BTC</h2>
        </S.DoubleLineCell>
        <Actions />
      </S.SingleLineCell>
    </S.Tables>
  );
};

export default TableMyAssets;
