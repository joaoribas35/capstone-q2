import TableTransactions from "../../components/Tables/TableTransactions";
import TopBar from "../../components/TopBar";
import ValueChart from "../../components/ValueChart/ValueChart";
import { motion } from "framer-motion";
import * as S from "../styles/style";

const Transactions = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: "-90%",
    },
  };

  return (
    <>
      <TopBar />
      <S.TransactionsConteiner>
        <motion.div
          initial="out"
          animate="in"
          exit="out"
          variants={pageTransition}
        >
          <S.Transactions>
            <aside>
              <ValueChart />
            </aside>
            <TableTransactions />
          </S.Transactions>
        </motion.div>
      </S.TransactionsConteiner>
    </>
  );
};

export default Transactions;
