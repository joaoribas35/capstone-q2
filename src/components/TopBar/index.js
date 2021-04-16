import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Menu, MenuItem, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

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
  console.log(user);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <S.TopBar>
          <div></div>

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
