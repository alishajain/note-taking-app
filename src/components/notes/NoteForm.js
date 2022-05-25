import { Fragment, useRef, useState } from "react";
import { Prompt } from "react-router-dom";

import Card from "../ui/Card";
import LoadingSpinner from "../ui/LoadingSpinner";
import classes from "./NoteForm.module.css";

const NoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);

  const textRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredText = textRef.current.value;

    props.onAddNote({ text: enteredText });
  };

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  const focusHandler = () => {
    setIsEntering(true);
  };
  return (
    <Fragment>
      <Prompt
        when={isEntering}
        message={(location) => "Do you want to leave?"}
      />
      <Card>
        <form
          onFocus={focusHandler}
          onSubmit={submitHandler}
          className={classes.form}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textRef}></textarea>
          </div>
          <div className={classes.action}>
            <button className="btn" onClick={finishEnteringHandler}>
              Add Note
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default NoteForm;
