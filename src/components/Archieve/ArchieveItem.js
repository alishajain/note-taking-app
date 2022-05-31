import { changeNoteType } from "../../lib/api";
import useHttp from "../../hooks/use-http";

import classes from '../notes/NoteItem.module.css'; 

const ArchieveItem = ({ id, text }) => {
  const { sendRequest } = useHttp(changeNoteType, true);

  const inboxBtnHandler = (event) => {
    event.preventDefault();

    sendRequest({ noteId: id, noteType: "inbox" });
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

export default ArchieveItem;
