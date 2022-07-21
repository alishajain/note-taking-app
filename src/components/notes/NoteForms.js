/* eslint-disable no-unused-vars */
import { Fragment, useRef, useState } from "react";
import { Prompt } from "react-router-dom";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { convertToHTML } from "draft-convert";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import Card from "../ui/Card";
import LoadingSpinner from "../ui/LoadingSpinner";
import "./NoteForms.scss";

const NoteForms = (props) => {
  const [isEntering, setIsEntering] = useState(false);

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [convertedContent, setConvertedContent] = useState(null);

  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  };
  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };

  const dateInputRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredDate = dateInputRef.current.value;
    props.onAddNote({
      text: convertedContent,
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
          className="form"
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className="loading">
              <LoadingSpinner />
            </div>
          )}
          <div className="control">
            <label>Date</label>
            <input type="date" min="2022-06-01" ref={dateInputRef} />
          </div>
          <div className="control">
            <label htmlFor="text">Text</label>
            <div className="editor">
              <Editor
                editorState={editorState}
                onEditorStateChange={handleEditorChange}
              />
            </div>
          </div>
          <div className="actions">
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
