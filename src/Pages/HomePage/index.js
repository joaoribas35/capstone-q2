import { Link } from "react-router-dom";

import SimpleSlider from "../../components/Carousel";
import ContainerCoins from "../../components/ContainerCoins";
import ParticlesBackground from "../../components/ParticlesBackground";

import TopBarHomePage from "../../components/TopBarHomepage";

import * as S from "./style";

const HomePage = () => {
  return (
    <>
      <ParticlesBackground>
        <S.LandingPage>
          <TopBarHomePage />
          <S.AppSumary>
            <img src="./svg/logoSvg.svg" alt="Cripto Fácil" />

            <h2>Já pensou em um gerenciador criptos?</h2>

            <p>
              &nbsp;&nbsp; Aqui no Nosso App voce consegue organizar suas
              carteirase e seu historico de transação. Tem tambem a parte de
              Carteira Ideal que voce pode colocar qual a porcentagem de cada
              moeda voce quer.
            </p>

            <Link to="/register">comece agora</Link>
          </S.AppSumary>
        </S.LandingPage>
      </ParticlesBackground>

      <ContainerCoins />
    </>
  );
};

export default HomePage;
