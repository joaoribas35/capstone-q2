import { Link } from "react-router-dom";

import SimpleSlider from "../../components/Carousel";
import ParticlesBackground from "../../components/ParticlesBackground";

import TopBarHomePage from "../../components/TopBarHomepage";

import * as S from "./style";

const HomePage = () => {
  return (
    <>
      <ParticlesBackground>
        <S.LandingPage>
          <TopBarHomePage />
          <S.Sumary>
            <S.AppSumary>
              <h1>Nosso App</h1>
              <p>
                <span>
                  Ja pensou em um gerenciador de carteiras de criptos?
                </span>{" "}
                Aqui no Nosso App voce consegue organizar suas carteirase e seu
                historico de transação. Tem tambem a parte de Carteira Ideal que
                voce pode colocar qual a porcentagem de cada moeda voce quer.{" "}
                <Link to="/register">comece agora</Link>
              </p>
            </S.AppSumary>
            <SimpleSlider />
          </S.Sumary>
        </S.LandingPage>
      </ParticlesBackground>
    </>
  );
};

export default HomePage;
