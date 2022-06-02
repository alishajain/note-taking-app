import { useHistory } from "react-router-dom";
import { useEffect } from "react";

import NoteForms from '../components/notes/NoteForms';
import useHttp from "../hooks/use-http";
import { addNote } from "../lib/api";

const NewNote = () => {
  const { sendRequest, status } = useHttp(addNote);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/notes");
    }
  }, [status, history]);

  const addNoteHandler = (noteData) => {
    sendRequest(noteData);
  };

  return (
    <div>
      <NoteForms isLoading={status === "pending"} onAddNote={addNoteHandler} />
    </div>
  );
};

export default NewNote;