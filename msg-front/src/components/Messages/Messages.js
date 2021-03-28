import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 790,
    marginTop: 10,
    marginBottom: 10,
    display: "grid",
    gridTemplateColumns: "1fr 3fr",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    fontSize: 12,
  },
});

const Messages = ({ messages }) => {
  const classes = useStyles();

  const localeDate = (date) => {
    const newDate = new Date(date).toLocaleDateString('en-GB');
    return newDate;
  };
  const localeTime = (date) => {
    const newDate = new Date(date).toLocaleTimeString("en-GB");
    return newDate;
  };

  return (
    <>
      {messages.map((msg) => {
        return (
          <Card className={classes.root} key={msg.id}>
            <CardContent>
              <Typography variant='h5' component='h2'>
                {msg.author}
                <Typography className={classes.pos} color='textSecondary'>
                  {localeDate(msg.date)} <span></span>
                  {localeTime(msg.date)}
                </Typography>
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant='body2' component='p'>
                {msg.message}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};

export default Messages;
