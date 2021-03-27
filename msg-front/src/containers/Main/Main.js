import { Grid, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../../components/Form/Form";
import Messages from "../../components/Messages/Messages";
import { fetchRequest, sendRequest } from "../../store/actions";
import "./Main.css";

const useStyle = makeStyles({
  main: {
    display: "flex",
    justifyContent: "center",
  },
});
const Main = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages);
  
  useEffect(() => {
    dispatch(fetchRequest());
  }, [dispatch]);

  const [formData, setFormdata] = useState({
    author: "",
    message: "",
  });

  const changeValueHandler = (e) => {
    const { name, value } = e.target;
    setFormdata((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(sendRequest(formData));
    dispatch(fetchRequest());
    setFormdata({
      author: "",
      message: "",
    });
  };

  return (
    <Grid container className={classes.main}>
      <Form
        submit={submitForm}
        change={changeValueHandler}
        valueAuthor={formData.author}
        valueMessage={formData.message}
      />
      <Messages messages={messages} />
    </Grid>
  );
};

export default Main;
