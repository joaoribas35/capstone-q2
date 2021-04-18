import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

import { useHistory } from "react-router-dom";

import * as S from "./style";

const useStyles = makeStyles((theme) => ({
  root: {
    "& 	.MuiAppBar-colorPrimary ": {
      color: "#FFF1",
    },
    "& .MuiPaper-elevation4": {
      boxShadow: "none",
    },

    // flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

const TopBarHomePage = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar
        color="transparent"
        position="relative"
        style={{ position: "absolute", top: "0", left: "0" }}
      >
        <S.TopBar>
          <S.LogoContainer>
            <AttachMoneyIcon />
            Cripto Facil
          </S.LogoContainer>
          <S.ButtonsContainer>
            <S.Button onClick={() => history.push("/login")}>Login</S.Button>
            <S.Button onClick={() => history.push("/register")}>
              Registro
            </S.Button>
          </S.ButtonsContainer>
        </S.TopBar>
      </AppBar>
    </div>
  );
};

export default TopBarHomePage;
