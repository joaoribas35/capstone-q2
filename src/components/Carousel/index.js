import Slider from "react-slick";
import { useState, useEffect } from "react";
import { CoinGeckoApi } from "../../services/api";
import formatValue from "../../utils";

import * as S from "./style";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 0,
    cssEase: "linear",
  };

  const [bitcoin, setBitcoin] = useState({});
  const [ethereum, setEthereum] = useState({});
  const [monero, setMonero] = useState({});

  const getBitcoin = async () => {
    const Bitcoin = await CoinGeckoApi.get("coins/bitcoin");
    return Bitcoin.data;
  };
  const getMonero = async () => {
    const Monero = await CoinGeckoApi.get("coins/monero");
    return Monero.data;
  };
  const getEthereum = async () => {
    const Ethereum = await CoinGeckoApi.get("coins/ethereum");
    return Ethereum.data;
  };

  const getCoins = async () => {
    try {
      const Bitcoin = await getBitcoin();
      setBitcoin(Bitcoin);
      const Ethereum = await getEthereum();
      setEthereum(Ethereum);
      const Monero = await getMonero();
      setMonero(Monero);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCoins();
  }, []);

  return (
    <S.Div>
      <Slider {...settings}>
        <S.CoinsContainer>
          <S.Coin>
            <S.P>
              <S.Img src={bitcoin.image?.large} />
              {bitcoin.name}
            </S.P>
            <S.Price>
              {formatValue(bitcoin.market_data?.current_price.brl)}
            </S.Price>
          </S.Coin>
        </S.CoinsContainer>
        <S.CoinsContainer>
          <S.Coin>
            <S.P>
              <S.Img src={ethereum.image?.large} />
              {ethereum.name}
            </S.P>
            <S.Price>
              {formatValue(ethereum.market_data?.current_price.brl)}
            </S.Price>
          </S.Coin>
        </S.CoinsContainer>
        <S.CoinsContainer>
          <S.Coin>
            <S.P>
              <S.Img src={monero.image?.large} />
              {monero.name}
            </S.P>
            <S.Price>
              {formatValue(monero.market_data?.current_price.brl)}
            </S.Price>
          </S.Coin>
        </S.CoinsContainer>
      </Slider>
    </S.Div>
  );
};
export default SimpleSlider;
