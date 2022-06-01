import { changeNoteType } from "../../lib/api";
import useHttp from "../../hooks/use-http";

import NoteDate from "../notes/NoteDate";
import classes from "../notes/NoteItem.module.css";

const TrashItem = ({ id, text, date }) => {
  console.log(date);
  const { sendRequest } = useHttp(changeNoteType, true);

  const inboxBtnHandler = (event) => {
    event.preventDefault();

    sendRequest({ noteId: id, noteType: "inbox" });
    setTimeout(() => {
      window.location.reload(true);
    }, 500);
  };

  return (
    <li className={classes.item}>
      <NoteDate date = {date} />
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
