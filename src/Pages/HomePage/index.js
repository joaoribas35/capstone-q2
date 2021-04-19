import { Link } from "react-router-dom";

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

            <h2>Dificuldade em gerenciar as suas criptomoedas?</h2>

            <p>
              &nbsp;&nbsp; Aqui na Cripto Fácil oferecemos uma solução completa
              para lhe auxiliar nos cálculos necessários, para um melhor
              aproveitamento das variações de preço no mercado. Além disso,
              calculamos a sua declaração de imposto de renda.{" "}
              <span style={{ fontWeight: "bold" }}>É o fim das planilhas!</span>
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
