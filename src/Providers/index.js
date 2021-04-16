import { MyAssetsProvider } from "./myAssets";
import { CoinsListProvider } from "./coinsList";
import { GetPriceProvider } from "./getPrice";
import { GetUserInfoProvider } from "./userInfo";
import { MyPortfolioProvider } from "./myPortfolio";

const Providers = ({ children }) => {
  return (
    <GetUserInfoProvider>
      <MyPortfolioProvider>
        <GetPriceProvider>
          <CoinsListProvider>
            <MyAssetsProvider>{children}</MyAssetsProvider>
          </CoinsListProvider>
        </GetPriceProvider>
      </MyPortfolioProvider>
    </GetUserInfoProvider>
  );
};

export default Providers;
