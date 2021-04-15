import TableTransactions from "../../components/Tables/TableTransactions";
import MenuNavBar from "../../components/MenuNavBar";
import ValueChart from "../../components/ValueChart/ValueChart";
import * as S from "../styles/style";

const Transactions = () => {
  return (
    <>
      <MenuNavBar />
      <S.Transactions>
        <ValueChart />
        <TableTransactions />
      </S.Transactions>
    </>
  );
};

export default Transactions;
