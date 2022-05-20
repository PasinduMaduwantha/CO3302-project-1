import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    paddingLeft: "0px",
    display: "inline-flex",
    justifyContent: "space-evenly",
    alignItems: "left",
    width: "100%",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    // marginLeft: theme.spacing(10),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Menu() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <div className={classes.navlinks}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link to="/explore" className={classes.link}>
            Explore
          </Link>
          <Link to="/plan" className={classes.link}>
            Travel Plans
          </Link>
          {/* <Link to="/wantToGo" className={classes.link}>
            Want to go
          </Link> */}
          <Link to="/reminders" className={classes.link}>
            Reminders
          </Link>
          <Link to="/about" className={classes.link}>
            About
          </Link>
          {/* <Link to="/contact" className={classes.link}>
            Contact
          </Link> */}
          <Link to="/faq" className={classes.link}>
            FAQ
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Menu;
