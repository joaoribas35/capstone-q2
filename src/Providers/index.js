import { MyAssetsProvider } from "./myAssets";
import { CoinsListProvider } from "./coinsList";
import { GetPriceProvider } from "./getPrice";
import { GetUserInfoProvider } from "./userInfo";
import { MyPortfolioProvider } from "./myPortfolio";
import { HistoricalDataProvider } from "./historicalData";

const Providers = ({ children }) => {
  return (
    <HistoricalDataProvider>
      <GetUserInfoProvider>
        <MyPortfolioProvider>
          <GetPriceProvider>
            <CoinsListProvider>
              <MyAssetsProvider>{children}</MyAssetsProvider>
            </CoinsListProvider>
          </GetPriceProvider>
        </MyPortfolioProvider>
      </GetUserInfoProvider>
    </HistoricalDataProvider>
  );
};

export default Providers;
