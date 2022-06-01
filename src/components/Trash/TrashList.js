import { Fragment } from "react";

import TrashItem from "./TrashItem";

const TrashList = (props) => {
  return (
    <Fragment>
      <ul className="list">
        {props.notes.map((note) => (
          <TrashItem key={note.id} id={note.id} text={note.text} type='trash' date={note.date}/>
        ))}
      </ul>
    </Fragment>
  );
};

export default TrashList;
