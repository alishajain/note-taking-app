import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";

import NoteItem from "./NoteItem";
import classes from './NoteList.module.css';

const NoteList = () => {
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);

    return (
        <Fragment>
            <ul className={classes.list}>
                <NoteItem key={note.id} id={note.id} text={note.text} />
            </ul>
        </Fragment>
    );
};

export default NoteList;