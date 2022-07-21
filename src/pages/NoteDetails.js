import { useEffect } from "react";
import { useParams } from "react-router-dom";

import HighlightedNote from "../components/notes/HighlightedNote";
import useHttp from "../hooks/use-http";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import { getSingleNote } from "../lib/api";

const NoteDetail = () => {
  const params = useParams();

  const { noteId } = params;

  const {
    sendRequest,
    status,
    data: loadedNotes,
    error,
  } = useHttp(getSingleNote, true);

  useEffect(() => {
    sendRequest(noteId);
  }, [sendRequest, noteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (!loadedNotes.text) {
    return <p className="centered">No Notes Found</p>;
  }

  return <HighlightedNote id={loadedNotes.id} text={loadedNotes.text} date={loadedNotes.date}/>;
};

export default NoteDetail;
