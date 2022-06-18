import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";

import NoteItem from "./NoteItem";

const sortNotes = (notes, asc) => {
  
  return notes.sort((noteA, noteB) => {
    if (asc){

      return new Date(noteA.date) - new Date(noteB.date);
    }
    else {
      return new Date(noteB.date) - new Date(noteA.date);
    }
  })
}

const NoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get('sort') === 'asc';

  const sortedNotes = sortNotes(props.notes, isSortingAscending);

  const changeSortingHandler = () => {
    history.push({
      pathname: location.pathname,
      search:`?sort=${(isSortingAscending? 'desc' : 'asc')}`
    });
  };

  return (
    <Fragment>
      <button className="btn" onClick={changeSortingHandler}>Sort by {isSortingAscending? 'latest first':'oldest first'}</button>
      <ul className="list">
        {sortedNotes.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            text={note.text}
            type="inbox"
            date={note.date}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default NoteList;
