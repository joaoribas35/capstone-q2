import { MyAssetsProvider } from "./myAssets";
import { CoinsListProvider } from "./coinsList";
import { GetPriceProvider } from "./getPrice";

const Providers = ({ children }) => {
  return (
    <GetPriceProvider>
      <CoinsListProvider>
        <MyAssetsProvider>{children}</MyAssetsProvider>
      </CoinsListProvider>
    </GetPriceProvider>
  );
};

export default Providers;
