import React from "react";
import withRoot from "../withRoot";
import CssBaseline from "@material-ui/core/CssBaseline";
import FoundationLogo from "../images/foundationLogo.png";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function NotFound() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={12} md={12} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <img src={FoundationLogo} />
          <Typography>
            <LockOutlinedIcon /> 404 Not found.
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
}

export default withRoot(NotFound);
