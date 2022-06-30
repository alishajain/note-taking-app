import { Fragment } from "react";
import DOMPurify from "dompurify";

import ArchieveItem from "./ArchieveItem";

const ArchieveList = (props) => {
  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };

  return (
    <Fragment>
      <ul className="list">
        {props.notes.map((note) => (
          <ArchieveItem
            key={note.id}
            id={note.id}
            text={<span dangerouslySetInnerHTML={createMarkup(note.text)} />}
            type="archieve"
            date={note.date}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default ArchieveList;
