/* eslint-disable no-unused-vars */
import { Fragment, useRef, useState, useEffect } from "react";
import { Prompt } from "react-router-dom";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import { convertToHTML } from 'draft-convert';
import DOMPurify from "dompurify";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import Card from "../ui/Card";
import LoadingSpinner from "../ui/LoadingSpinner";
import classes from "./NoteForm.module.css";

const NoteForms = (props) => {
  const [isEntering, setIsEntering] = useState(false);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const  [convertedContent, setConvertedContent] = useState(null);

  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  }
  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  }

  const createMarkup = (html) => {
    return  {
      __html: DOMPurify.sanitize(html)
    }
  }
  console.log(convertedContent);

  const dateInputRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredDate = dateInputRef.current.value;
    props.onAddNote({
      text: "asd",
      type: "inbox",
      date: enteredDate,
    });
  };

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
          "Are you sure you want to leave? All your entered data will be lost!"
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
          <div>
            <label>Date</label>
            <input type="date" min="2022-06-01" ref={dateInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <div
              style={{
                border: "1px solid black",
                padding: "2px",
                minHeight: "400px",
              }}
            >
              <Editor
                editorState={editorState}
                onEditorStateChange={handleEditorChange}
              />
            </div>
            <div className="preview" dangerouslySetInnerHTML={createMarkup(convertedContent)}></div>
          </div>
          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className="btn">
              Add Note
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default NoteForms;
