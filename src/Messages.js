import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import axios from "axios";

const useStyles = makeStyles(() => ({
  text: {
    margin: "1rem",
    padding: "1rem",
  },
  h3: {
    margin: "1rem",
    padding: "1rem",
    backgroundColor: "#f9f9f9",
    display: "flex",
  },
  button: {
    margin: "1rem",
  },
  comment: {
    margin: 10,
  },
}));

function Messages() {
  const classes = useStyles();
  const [comment, setComment] = useState([]);
  const [text, setText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    await axios
      .get("https://tinderbackend1819.herokuapp.com/tinder/comments")
      .then((req) => setComment(req.data))
      .catch((err) => console.log(err));
  }
  function postData() {
    axios
      .post("https://tinderbackend1819.herokuapp.com/tinder/comments", {
        comment: `${text}`,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      .then(() => fetchData())
      .then(setText(""));
  }

  return (
    <div>
      <div className={classes.text}>
        <TextField
          onChange={(e) => setText(e.target.value)}
          id="standard-basic"
          label="Comment"
          fullWidth
          value={text}
        />
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={postData}
        >
          Send Comment
        </Button>
      </div>
      <div>
        {comment.map((c, index) => (
          <h3 className={classes.h3} key={index}>
            <Avatar src="/broken-image.jpg" />
            <div className={classes.comment}>{c.comment}</div>
          </h3>
        ))}
      </div>
    </div>
  );
}

export default Messages;
