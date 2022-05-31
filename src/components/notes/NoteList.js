import { Fragment } from "react";

import NoteItem from "./NoteItem";

const NoteList = (props) => {
  return (
    <Fragment>
      <ul className='list'>
        {props.notes.map((note) => (
          <NoteItem key={note.id} id={note.id} text={note.text} type='inbox'/>
        ))}
      </ul>
    </Fragment>
  );
};

export default NoteList;
