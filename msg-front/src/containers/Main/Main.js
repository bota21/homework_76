import { Grid, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../../components/Form/Form";
import Messages from "../../components/Messages/Messages";
import WindowError from "../../components/UI/WindowError";
import Spinner from "../../components/UI/Spinner";
import { fetchRequest, sendRequest, formErr } from "../../store/actions";
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
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const formError = useSelector((state) => state.formError);
  
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
    if (formData.author !== "" && formData.message !== "") {
      dispatch(sendRequest(formData));
      dispatch(fetchRequest());
      setFormdata({
        author: "",
        message: "",
      });
    } else {
      dispatch(formErr("Not entered author or message"));
    }
  };

  return (
    <Grid container className={classes.main}>
      {loading ? <Spinner /> : null}
      <Form
        submit={submitForm}
        change={changeValueHandler}
        valueAuthor={formData.author}
        valueMessage={formData.message}
      />
      {error ? <WindowError>{error && error.message}</WindowError> : null}
      {formError ? <WindowError>{formError}</WindowError> : null}
      <Messages messages={messages} />
    </Grid>
  );
};

export default Main;
