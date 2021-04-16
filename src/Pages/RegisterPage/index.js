import FormRegister from "../../components/FormRegister";
import ParticlesBackground from "../../components/ParticlesBackground";

import TopBarHomePage from "../../components/TopBarHomepage";

import * as S from "../styles/style";

const RegisterPage = () => {
  return (
    <>
      <ParticlesBackground>
        <S.RegisterPage>
          <TopBarHomePage />
          <S.TopBarConteiner>
            <FormRegister />
          </S.TopBarConteiner>
        </S.RegisterPage>
      </ParticlesBackground>
    </>
  );
};

export default RegisterPage;
