import { useState } from "react";
import DOMPurify from "dompurify";

import "./HighlightedNote.scss";
import EditNote from "./EditNote";
import NoteDate from "./NoteDate";

const HighlightedNote = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const editBtnHandler = () => {
    setIsEditing(true);
  };

  const createMarkup = (html) => {
    return  {
      __html: DOMPurify.sanitize(html)
    }
  }

  return (
    <div className="note">
      <NoteDate date={props.date}/>
      {<div dangerouslySetInnerHTML={createMarkup(props.text)}/>}
      <button className="btn" onClick={editBtnHandler}>
        Edit
      </button>
      {isEditing && <EditNote id={props.id} text={props.text} date={props.date}/>}
    </div>
  );
};

export default HighlightedNote;
