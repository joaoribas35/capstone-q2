import FormLogin from "../../components/FormLogin";

import TopBarHomePage from "../../components/TopBarHomepage";

import * as S from "../styles/style";

const LoginPage = () => {
  return (
    <>
      <S.LoginPage>
        <TopBarHomePage />
        <S.topBarConteiner>
          <FormLogin />
        </S.topBarConteiner>
      </S.LoginPage>
    </>
  );
};

export default LoginPage;
