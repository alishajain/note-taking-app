import { Fragment } from "react";

import NoteItem from "./NoteItem";
import classes from "./NoteList.module.css";

const NoteList = (props) => {
  return (
    <Fragment>
      <ul className={classes.list}>
        {props.notes.map((note) => (
          <NoteItem key={note.id} id={note.id} text={note.text} />
        ))}
      </ul>
    </Fragment>
  );
};

export default NoteList;
