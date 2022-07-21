import { Fragment } from "react";
import { Link } from "react-router-dom";

import { changeNoteType } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import NoteDate from "./NoteDate";
import "./NoteItem.scss";

const NoteItem = ({ id, text, date, page }) => {
  const { sendRequest } = useHttp(changeNoteType, true);

  const archieveBtnHandler = (event) => {
    event.preventDefault();

    sendRequest({ noteId: id, noteType: "archieve" });

    setTimeout(() => {
      window.location.reload(true);
    }, 500);
  };

  const deleteBtnHandler = (event) => {
    event.preventDefault();

    sendRequest({ noteId: id, noteType: "trash" });

    setTimeout(() => {
      window.location.reload(true);
    }, 500);
  };

  const inboxBtnHandler = (event) => {
    event.preventDefault();

    sendRequest({ noteId: id, noteType: "inbox" });
    setTimeout(() => {
      window.location.reload(true);
    }, 500);
  };

  return (
    <li className="item">
      <NoteDate date={date} />
      <blockquote>
        <p>{text}</p>
      </blockquote>
      {page === "inbox" && (
        <Fragment>
          <Link className="btn" to={`/notes/${id}`}>
            View
          </Link>
          <button className="btn" onClick={archieveBtnHandler}>
            Archieve
          </button>
          <button className="btn" onClick={deleteBtnHandler}>
            Delete
          </button>
        </Fragment>
      )}
      {(page === "archieve" || "trash") && (
        <button className="btn" onClick={inboxBtnHandler}>
          Move to Inbox
        </button>
      )}
    </li>
  );
};

export default NoteItem;
