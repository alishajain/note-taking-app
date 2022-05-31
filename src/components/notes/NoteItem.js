import { Link } from "react-router-dom";

import { changeNoteType } from "../../lib/api";
import useHttp from '../../hooks/use-http';
import classes from "./NoteItem.module.css";

const NoteItem = ({ id, text, type }) => {
  const {sendRequest} = useHttp(changeNoteType, true);

  const archieveBtnHandler = (event) => {
    event.preventDefault();

    sendRequest({noteId:id, noteType: 'archieve'});
  };

  const deleteBtnHandler = (event) => {
    event.preventDefault();

    sendRequest({noteId:id, noteType:'trash'});
    return console.log('Jain.....');
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
