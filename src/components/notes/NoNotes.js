import { Link } from "react-router-dom";

import "./NoNotes.scss";

const NoNotes = () => {
  return (
    <div className="nonote">
      <p >No Notes Found</p>
      <Link className="btn" to="/new-note">
        Add a Note
      </Link>
    </div>
  );
};

export default NoNotes;
