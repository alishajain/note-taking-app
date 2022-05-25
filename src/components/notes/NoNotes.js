import { Link } from "react-router-dom";

import classes from "./NoNotes.module.css";

const NoNotes = () => {
  return (
    <div className={classes.nonote}>
      <p >No Notes Found</p>
      <Link className="btn" to="/new-note">
        Add a Note
      </Link>
    </div>
  );
};

export default NoNotes;
