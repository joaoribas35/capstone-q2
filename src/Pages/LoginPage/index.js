import FormLogin from "../../components/FormLogin";
import ParticlesBackground from "../../components/ParticlesBackground";

import TopBarHomePage from "../../components/TopBarHomepage";

import * as S from "../styles/style";

const LoginPage = () => {
  return (
    <>
      <ParticlesBackground>
        <S.LoginPage>
          <TopBarHomePage />
          <S.TopBarConteiner>
            <FormLogin />
          </S.TopBarConteiner>
        </S.LoginPage>
      </ParticlesBackground>
    </>
  );
};

export default LoginPage;
