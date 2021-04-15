import { MyAssetsProvider } from "./myAssets";
import { CoinsListProvider } from "./coinsList";
import { GetPriceProvider } from "./getPrice";
import { MyPortfolioProvider } from "./myPortfolio";

const Providers = ({ children }) => {
  return (
    <MyPortfolioProvider>
      <GetPriceProvider>
        <CoinsListProvider>
          <MyAssetsProvider>{children}</MyAssetsProvider>
        </CoinsListProvider>
      </GetPriceProvider>
    </MyPortfolioProvider>
  );
};

export default Providers;
