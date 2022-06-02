import { useState } from "react";

import classes from "./HighlightedNote.module.css";
import EditNote from "./EditNote";
import NoteDate from "./NoteDate";

const HighlightedNote = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const editBtnHandler = () => {
    setIsEditing(true);
  };

  return (
    <div className={classes.note}>
      <NoteDate date={props.date}/>
      <p>{props.text}</p>
      <button className="btn" onClick={editBtnHandler}>
        Edit
      </button>
      {isEditing && <EditNote id={props.id} text={props.text} date={props.date}/>}
    </div>
  );
};

export default HighlightedNote;