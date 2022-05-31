import { changeNoteType } from "../../lib/api";
import useHttp from "../../hooks/use-http";

import classes from '../notes/NoteItem.module.css'; 

const TrashItem = ({ id, text }) => {
  const { sendRequest } = useHttp(changeNoteType, true);

  const inboxBtnHandler = (event) => {
    event.preventDefault();

    sendRequest({ noteId: id, noteType: "inbox" });
    window.location.reload(true);
  };

  return (
    <li className={classes.item}>
      <blockquote>
        <p>{text}</p>
      </blockquote>
      <button className="btn" onClick={inboxBtnHandler}>
        Move to Inbox
      </button>
    </li>
  );
};

export default TrashItem;
