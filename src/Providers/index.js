import { MyCoinsProvider } from "./myCoins";
import { MyTransactionsProvider } from "./myTransactions";
import { MyAssetsProvider } from "./myAssets";
import { CoinsListProvider } from "./coinsList";

const Providers = ({ children }) => {
  return (
    <CoinsListProvider>
      <MyCoinsProvider>
        <MyTransactionsProvider>
          <MyAssetsProvider>{children}</MyAssetsProvider>
        </MyTransactionsProvider>
      </MyCoinsProvider>
    </CoinsListProvider>
  );
};

export default Providers;
