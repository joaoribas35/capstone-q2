import { MyCoinsProvider } from "./myCoins";
import { MyTransactionsProvider } from "./myTransactions";

const Providers = ({ children }) => {
  return (
    <MyCoinsProvider>
      <MyTransactionsProvider>{children}</MyTransactionsProvider>
    </MyCoinsProvider>
  );
};

export default Providers;
