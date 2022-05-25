import classes from './HighlightedNote.module.css';

const HighlightedNote = (props) => {
    return <div className={classes.note} >
        <p>{props.text}</p>
    </div>
}

export default HighlightedNote;