import FormRegister from "../../components/FormRegister";

import TopBarHomePage from "../../components/TopBarHomepage";

import * as S from "../styles/style";

const RegisterPage = () => {
  return (
    <>
      <S.RegisterPage>
        <TopBarHomePage />
        <S.topBarConteiner>
          <FormRegister />
        </S.topBarConteiner>
      </S.RegisterPage>
    </>
  );
};

export default RegisterPage;
