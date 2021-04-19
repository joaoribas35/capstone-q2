import { MyAssetsProvider } from "./myAssets";
import { CoinsListProvider } from "./coinsList";
import { GetPriceProvider } from "./getPrice";
import { GetUserInfoProvider } from "./userInfo";
import { MyPortfolioProvider } from "./myPortfolio";
import { GetTransactionsProvider } from "./getTransactions";

const Providers = ({ children }) => {
  return (
    <GetUserInfoProvider>
      <GetTransactionsProvider>
        <GetPriceProvider>
          <MyPortfolioProvider>
            <CoinsListProvider>
              <MyAssetsProvider>{children}</MyAssetsProvider>
            </CoinsListProvider>
          </MyPortfolioProvider>
        </GetPriceProvider>
      </GetTransactionsProvider>
    </GetUserInfoProvider>
  );
};

export default Providers;
