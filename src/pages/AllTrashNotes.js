import { useEffect } from "react";

import LoadingSpinner from "../components/ui/LoadingSpinner";
import NoteList from "../components/notes/NoteList";
import NoNotes from "../components/notes/NoNotes";
import useHttp from "../hooks/use-http";
import { getAllNotes } from "../lib/api";

const AllTrashNotes = () => {
  const {
    sendRequest,
    status,
    data: loadedNotes,
    error,
  } = useHttp(getAllNotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

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

  if (status === "completed" && (!loadedNotes || loadedNotes.length === 0)) {
    return (
      <>
        <p>no notes</p>
        <NoNotes />
      </>
    );
  }

  return (
    <NoteList
      notes={loadedNotes.filter((note) => note.type === "trash")}
      page={"trash"}
    />
  );
};

export default AllTrashNotes;
