import { useEffect } from "react";

import LoadingSpinner from "../components/ui/LoadingSpinner";
import ArchieveList from "../components/Archieve/ArchieveList";
import NoNotes from "../components/notes/NoNotes";
import useHttp from "../hooks/use-http";
import { getAllNotes } from "../lib/api";

const ArchieveNote = () => {
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
    return <NoNotes />;
  }

  return (
    <ArchieveList notes={loadedNotes.filter((note) => note.type === "archieve")} />
  );
};

export default ArchieveNote;
