import { Link } from "react-router-dom";

import { changeNoteType } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import classes from "./NoteItem.module.css";

const NoteItem = ({ id, text, type }) => {
  const { sendRequest } = useHttp(changeNoteType, true);

  const archieveBtnHandler = (event) => {
    event.preventDefault();

    sendRequest({ noteId: id, noteType: "archieve" });
    window.location.reload(true);
  };

  const deleteBtnHandler = (event) => {
    event.preventDefault();

    sendRequest({ noteId: id, noteType: "trash" });
    window.location.reload(true);
  };

  return (
    <li className={classes.item}>
      <blockquote>
        <p>{text}</p>
      </blockquote>
      <Link className="btn" to={`/notes/${id}`}>
        View Fullscreen
      </Link>
      <button className="btn">Add Label</button>
      <Link className="btn" onClick={archieveBtnHandler} to="/archieve">
        Archieve
      </Link>
      <button className="btn" onClick={deleteBtnHandler}>
        Delete
      </button>
    </li>
  );
};

export default NoteItem;
