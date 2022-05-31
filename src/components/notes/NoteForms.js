import { Fragment, useRef, useState } from "react";
import { Prompt } from "react-router-dom";

import Card from "../ui/Card";
import LoadingSpinner from "../ui/LoadingSpinner";
import classes from "./NoteForm.module.css";

const NoteForms = (props) => {
  const [isEntering, setIsEntering] = useState(false);

  const textInputRef = useRef();

  const submitFormHandler= (event) => {
    event.preventDefault();

    const enteredText = textInputRef.current.value;

    props.onAddNote({ text: enteredText, type: 'inbox' });
  }

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  const formFocusedHandler = () => {
    setIsEntering(true);
  };

  return (
    <Fragment>
      <Prompt
        when={isEntering}
        message={(location) =>
          'Are you sure you want to leave? All your entered data will be lost!'
        }
      />
      <Card>
        <form
          onFocus={formFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}
          <div className={classes.control}>
            <label htmlFor='text'>Text</label>
            <textarea id='text' rows='5' ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className='btn'>Add Note</button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default NoteForms;