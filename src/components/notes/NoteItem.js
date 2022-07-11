import { Link } from "react-router-dom";

import { changeNoteType } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import NoteDate from "./NoteDate";
import "./NoteItem.scss";

const NoteItem = ({ id, text, date }) => {
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

  return (
    <li className="item">
      <NoteDate date = {date} />
      <blockquote>
        <p>{text}</p>
      </blockquote>
      <Link className="btn" to={`/notes/${id}`}>
        View 
      </Link>
      <button className="btn" onClick={archieveBtnHandler}>
        Archieve
      </button>
      <button className="btn" onClick={deleteBtnHandler}>
        Delete
      </button>
    </li>
  );
};

export default NoteItem;
