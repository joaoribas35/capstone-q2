import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Menu, MenuItem, IconButton, Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { Link } from "react-router-dom";

import { UserInfo } from "../../Providers/userInfo";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { useHistory } from "react-router-dom";

import React from "react";

import * as S from "./style";

const useStyles = makeStyles((theme) => ({
  root: {
    "& 	.MuiIconButton-root ": {
      color: "white",
    },
    "& .MuiSvgIcon-root": {
      fontSize: "2.5rem",
    },
    "& .MuiAppBar-colorPrimary": {
      backgroundColor: "#212f41",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  Menu: {
    top: 0,
  },
}));

const TopBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { user } = UserInfo();
  const user_name = localStorage.getItem("userName");
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openModal = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("token");
    history.push("/");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <S.TopBar>
          <S.Conteiner>
            <S.LogoContainer>
              <img alt="Logo" src=""></img>
            </S.LogoContainer>
            <S.MenuContainer>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MenuIcon />
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <Link to="/dashboard">Pagina Inicial</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/rebalance">Carteira Ideal</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/accounting">Contabilidade</Link>
                </MenuItem>
              </Menu>
            </S.MenuContainer>
            <S.LinkConteiner>
              <Link to="/dashboard">Pagina Inicial</Link>
              <Link to="/rebalance">Carteira Ideal</Link>
              <Link to="/accounting">Contabilidade</Link>
            </S.LinkConteiner>
          </S.Conteiner>
          <S.UserContainer>
            <S.Img src="https://picsum.photos/id/1/40/40" />
            <S.P>{user_name ? user_name : user.userName}</S.P>
            <IconButton
              font-size="small"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={openModal}
            >
              <ExitToAppIcon />
            </IconButton>
          </S.UserContainer>
        </S.TopBar>
      </AppBar>
    </div>
  );
};

export default TopBar;
