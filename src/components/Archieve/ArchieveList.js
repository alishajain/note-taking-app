import { Fragment } from "react";

import ArchieveItem from "./ArchieveItem";

const ArchieveList = (props) => {
  return (
    <Fragment>
      <ul className="list">
        {props.notes.map((note) => (
          <ArchieveItem key={note.id} id={note.id} text={note.text} type='archieve' date={note.date}/>
        ))}
      </ul>
    </Fragment>
  );
};

export default ArchieveList;
