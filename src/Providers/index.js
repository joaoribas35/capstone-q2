import { MyCoinsProvider } from "./myCoins";
import { MyTransactionsProvider } from "./myTransactions";
import { MyAssetsProvider } from "./myAssets";
import { CoinsListProvider } from "./coinsList";
import { GetPriceProvider } from "./getPrice";

const Providers = ({ children }) => {
  return (
    <GetPriceProvider>
      <CoinsListProvider>
        <MyCoinsProvider>
          <MyTransactionsProvider>
            <MyAssetsProvider>{children}</MyAssetsProvider>
          </MyTransactionsProvider>
        </MyCoinsProvider>
      </CoinsListProvider>
    </GetPriceProvider>
  );
};

export default Providers;
