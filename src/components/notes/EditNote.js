import { useRef, useState, Fragment } from "react";
import { Prompt } from "react-router-dom";

import Card from "../ui/Card";
import classes from "./NoteForm.module.css";
import { editNoteData } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import HighlightedNote from "./HighlightedNote";

const EditNote = (id, text, date) => {
  const [isEntering, setIsEntering] = useState(true);
  const { sendRequest } = useHttp(editNoteData, true);

  const textInputRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredText = textInputRef.current.value;

    sendRequest({ noteId: id, noteText: enteredText });
  };

  const finishEditHandler = () => {
    setIsEntering(false);
  };

  return (
    <Fragment>
      <Prompt
        when={isEntering}
        message={(location) => "All your changes will be deleted"}
      />

      <Card>
        <form className={classes.form} onSubmit={submitFormHandler}>
          <div className={classes.control}>
            <label htmlFor="text">Enter edited text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>

          <button onClick={finishEditHandler} className="btn">
            Submit
          </button>
        </form>
      </Card>
      {!isEntering && <HighlightedNote text={text} date={date} />}
    </Fragment>
  );
};

export default EditNote;
