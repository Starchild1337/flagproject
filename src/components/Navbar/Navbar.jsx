import React from "react";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import NightsStayIcon from "@material-ui/icons/NightsStay";

import useStyles from "./styles";

const Navbar = ({ darkModeToggle, mode }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        className={mode ? classes.appBar : classes.appBar_dark}
      >
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5" className={classes.title}>
            <a href="/flagproject" style={{ textDecoration: "none" }}>
              Where in the world?
            </a>
          </Typography>
          <Typography
            variant="subtitle1"
            className={classes.darkMode}
            onClick={() => darkModeToggle()}
          >
            <NightsStayIcon className={classes.icon} />
            Dark mode
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mode: state.darkMode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    darkModeToggle: () => dispatch({ type: "TOGGLE_DARK_MODE" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
