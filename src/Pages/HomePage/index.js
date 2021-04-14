import * as S from "./style";

import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

import { CoinGeckoApi } from "../../services/api";
import { useEffect } from "react";

import { Link, useHistory } from "react-router-dom";

import SimpleSlider from "../../components/Carousel";

const useStyles = makeStyles((theme) => ({
  root: {
    "& 	.MuiAppBar-colorPrimary ": {
      color: "#FFF",
    },
    "& .MuiPaper-elevation4": {
      boxShadow: "none",
    },

    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const HomePage = () => {
  const classes = useStyles();

  const history = useHistory();

  return (
    <>
      <S.LandingPage>
        <div className={classes.root}>
          <AppBar color="transparent" position="static">
            <S.TopBar>
              <S.LogoContainer>
                <AttachMoneyIcon />
                Nosso App
              </S.LogoContainer>
              <S.ButtonsContainer>
                <S.Button onClick={() => history.push("/login")}>
                  Login
                </S.Button>
                <S.Button onClick={() => history.push("/register")}>
                  Registro
                </S.Button>
              </S.ButtonsContainer>
            </S.TopBar>
          </AppBar>
        </div>
        <S.Sumary>
          <S.AppSumary>
            <h1>Nosso App</h1>
            <p>
              Ja pensou em um gerenciador de carteiras de criptos? Aqui no Nosso
              App voce consegue organizar suas carteirase e seu historico de
              transação. Tem tambem a parte de Carteira Ideal que voce pode
              colocar qual a porcentagem de cada moeda voce quer.{" "}
              <Link to="/register">comece agora</Link>
            </p>
          </S.AppSumary>
          <SimpleSlider />
        </S.Sumary>
      </S.LandingPage>
    </>
  );
};

export default HomePage;
