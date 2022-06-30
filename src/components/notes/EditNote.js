import { useState, Fragment } from "react";
import { Prompt } from "react-router-dom";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { convertToHTML } from "draft-convert";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import Card from "../ui/Card";
import HighlightedNote from "./HighlightedNote";
import "./NoteForms.scss";
import { editNoteData } from "../../lib/api";
import useHttp from "../../hooks/use-http";

const EditNote = (props) => {
  const [isEntering, setIsEntering] = useState(true);
  const [doneEditing, setDoneEditing] = useState(false);
  const { sendRequest } = useHttp(editNoteData, true);
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

  const submitFormHandler = (event) => {
    event.preventDefault();

    sendRequest({ noteId: props.id, noteText: convertedContent });
  };

  const finishEditHandler = () => {
    setIsEntering(false);
    setDoneEditing(true);

    setTimeout(() => {
      window.location.reload(true);
    }, 400);
  };

  return (
    <Fragment>
      <Prompt
        when={isEntering}
        message={(location) => "All your changes will be deleted"}
      />

      <Card>
        <form className="form" onSubmit={submitFormHandler}>
          <div className="control">
            <label htmlFor="text">Enter edited text</label>
            <div
              style={{
                border: ".5px solid black",
                padding: "1px",
                minHeight: "400px",
              }}
            >
              <Editor
                editorState={editorState}
                onEditorStateChange={handleEditorChange}
              />
            </div>
          </div>
          <button onClick={finishEditHandler} className="btn">
            Submit
          </button>
          {doneEditing && (
            <HighlightedNote
              id={props.id}
              text={props.text}
              date={props.date}
            />
          )}
        </form>
      </Card>
    </Fragment>
  );
};

export default EditNote;
