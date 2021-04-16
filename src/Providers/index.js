import { MyAssetsProvider } from "./myAssets";
import { CoinsListProvider } from "./coinsList";
import { GetPriceProvider } from "./getPrice";
import { GetUserInfoProvider } from "./userInfo";

const Providers = ({ children }) => {
  return (
    <GetUserInfoProvider>
      <GetPriceProvider>
        <CoinsListProvider>
          <MyAssetsProvider>{children}</MyAssetsProvider>
        </CoinsListProvider>
      </GetPriceProvider>
    </GetUserInfoProvider>
  );
};

export default Providers;
