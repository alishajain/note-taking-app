import { Fragment } from "react";
import DOMPurify from "dompurify";

import TrashItem from "./TrashItem";

const TrashList = (props) => {
  const createMarkup = (html) => {
    return  {
      __html: DOMPurify.sanitize(html)
    }
  }
  
  return (
    <Fragment>
      <ul className="list">
        {props.notes.map((note) => (
          <TrashItem
            key={note.id}
            id={note.id}
            text={<span dangerouslySetInnerHTML={createMarkup(note.text)} />}
            type="trash"
            date={note.date}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default TrashList;
