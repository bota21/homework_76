import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  errorWindow: {
    justifyContent: "center",
  },
  paper: {
    padding: 20,
  },
});

export default function WindowError({ open, children }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.errorWindow}>
        <Grid item>
          <Paper className={classes.paper}>{children}</Paper>
        </Grid>
    </Grid>
  );
}
