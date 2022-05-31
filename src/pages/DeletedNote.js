import { useHistory } from "react-router-dom";
import { useEffect } from "react";

import useHttp from "../hooks/use-http";
import { addToTrash } from "../lib/api";

const DeletedNote = () => {
    const { sendRequest, status } = useHttp(addToTrash);
    const history = useHistory();

    useEffect(() => {
        if (status === 'completed') {
            history.push('/trash');
        }
    },[status, history]);

    const addDeletedNoteHandler = (noteData) => {
        sendRequest(noteData);
    };

    return;
}

export default DeletedNote;