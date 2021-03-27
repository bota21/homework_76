import { Button, Grid, makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "center",
  },
  formAuthor: {
    width: 200,
    marginRight: 20,
  },
  formMsg: {
    width: 500,
  },
  formButton: {
    marginLeft: 20,
    height: 56,
    width: 50,
  },
});

const Form = ({ submit, change, valueAuthor, valueMessage }) => {
  const classes = useStyles();

  return (
    <form
    // onSubmit={(e) => submit(e, formData)}
    >
      <Grid container className={classes.root}>
        <Grid item>
          <TextField
            id='author'
            label='Enter author'
            variant='outlined'
            className={classes.formAuthor}
            name='author'
            value={valueAuthor}
            onChange={change}
          />
          <TextField
            id='message'
            label='Enter message'
            variant='outlined'
            className={classes.formMsg}
            name='message'
            value={valueMessage}
            onChange={change}
          />
          <Button
            variant='contained'
            color='primary'
            className={classes.formButton}
            onClick={submit}>
            Send
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
