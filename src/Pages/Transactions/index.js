import TableTransactions from "../../components/Tables/TableTransactions";
import ValueChart from '../../components/ValueChart/ValueChart'
import * as S from "../styles/style";

const Transactions = () => {
  return (
    <S.Transactions>
      <ValueChart />
      <TableTransactions />
    </S.Transactions>
  );
};

export default Transactions;
