import { Fragment } from "react";
import { Link } from "react-router-dom";

import { changeNoteType } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import NoteDate from "./NoteDate";
import "./NoteItem.scss";

const NoteItem = ({ id, text, date, page }) => {
  const { sendRequest } = useHttp(changeNoteType, true);

  const btnHandler = (type) => {
    sendRequest({ noteId: id, noteType: type });

    setTimeout(() => {
      window.location.reload(true);
    }, 500);
  };

  const archieveBtnHandler = (event) => {
    event.preventDefault();

    btnHandler("archieve");
  };

  const deleteBtnHandler = (event) => {
    event.preventDefault();

    btnHandler("trash");
  };

  const inboxBtnHandler = (event) => {
    event.preventDefault();

    btnHandler("inbox");
  };

  return (
    <li className="item">
      <NoteDate date={date} />
      <blockquote>
        <p>{text}</p>
      </blockquote>
      {(page === "archieve" || page === "trash") && (
        <button className="btn" onClick={inboxBtnHandler}>
          Move to Inbox
        </button>
      )}
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
    </li>
  );
};

export default NoteItem;
