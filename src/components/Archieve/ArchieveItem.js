import { useHistory } from "react-router-dom";
import { changeNoteType } from "../../lib/api";
import useHttp from "../../hooks/use-http";

import NoteDate from "../notes/NoteDate";
import "../notes/NoteItem.scss";

const ArchieveItem = ({ id, text, date }) => {
  const { sendRequest } = useHttp(changeNoteType, true);
  const history = useHistory();

  const inboxBtnHandler = (event) => {
    event.preventDefault();

    sendRequest({ noteId: id, noteType: "inbox" });
    // setTimeout(() => {
    //   window.location.reload(true);
    // }, 500)
    history.go(0);
  };

  return (
    <li className="item">
      <NoteDate date={date} />
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
