import { Fragment } from "react";
import { useLocation } from "react-router-dom";

import NoteItem from "./NoteItem";
import classes from './NoteList.module.css';

const NoteList = (props) => {
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);

    return (
        <Fragment>
            <ul className={classes.list}>
                <NoteItem key={props.note.id} id={props.note.id} text={props.note.text} />
            </ul>
        </Fragment>
    );
};

export default NoteList;