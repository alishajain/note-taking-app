const TrashItem = ({id, text}) => {
    return (
        <li>
            <blockquote>
                <p>{text}</p>
            </blockquote>
        </li>
    );
};

export default TrashItem;