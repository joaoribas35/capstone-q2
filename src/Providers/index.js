import { MyAssetsProvider } from "./myAssets";
import { CoinsListProvider } from "./coinsList";
import { GetPriceProvider } from "./getPrice";
import { GetUserInfoProvider } from "./userInfo";
import { MyPortfolioProvider } from "./myPortfolio";
import { HistoricalDataProvider } from "./historicalData";

const Providers = ({ children }) => {
  return (
    <GetUserInfoProvider>
      <GetPriceProvider>
        <MyPortfolioProvider>
          <CoinsListProvider>
            <MyAssetsProvider>{children}</MyAssetsProvider>
          </CoinsListProvider>
        </MyPortfolioProvider>
      </GetPriceProvider>
    </GetUserInfoProvider>
  );
};

export default Providers;
