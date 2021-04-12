import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Menu, MenuItem, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";

import * as S from "./style";

const useStyles = makeStyles((theme) => ({
  root: {
    "& 	.MuiIconButton-root ": {
      color: "white",
    },
    "& .MuiSvgIcon-root": {
      fontSize: "3.5rem",
    },
    flexGrow: 1,
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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <S.TopBar>
          <IconButton
            fonr-size="medium"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              onClick={
                handleClose /*aqui sera substituido pelo Caminho da pagina inicial*/
              }
            >
              Pagina Inicial
            </MenuItem>
            <MenuItem
              onClick={
                handleClose /*aqui sera substituido pelo Caminho da pagina Carteira*/
              }
            >
              Carteira
            </MenuItem>
            <MenuItem
              onClick={
                handleClose /*aqui sera substituido pelo Caminho da pagina Painel*/
              }
            >
              Painel
            </MenuItem>
          </Menu>
          <S.UserContainer>
            <S.Img src="https://picsum.photos/id/1/40/40" />
            <S.P>UserNamesupergigantesco</S.P>
          </S.UserContainer>
        </S.TopBar>
      </AppBar>
    </div>
  );
};

export default TopBar;
