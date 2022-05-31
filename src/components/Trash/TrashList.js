import { Fragment } from "react";

import TrashItem from "./TrashItem";

const TrashList = ({props}) => {
  return (
    <Fragment>
      <ul>
        {props.notes.map((note) => (
          <TrashItem key={note.id} id={note.id} text={note.text} />
        ))}
      </ul>
    </Fragment>
  );
};

export default TrashList;
