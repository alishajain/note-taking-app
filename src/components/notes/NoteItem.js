import { Link } from "react-router-dom";

import classes from "./NoteItem.module.css";

const NoteItem = (props) => {
  return (
    <li className={classes.item}>
      <blockquote>
        <p>{props.text}</p>
      </blockquote>
      <Link className="btn" to={`/notes/${props.id}`} >
          View Fullscreen
      </Link>
    </li>
  );
};

export default NoteItem;
