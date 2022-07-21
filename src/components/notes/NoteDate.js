import "./NoteDate.scss";

const NoteDate = ({ date }) => {
  const check = new Date(date);
  const month = check.toLocaleString("en-US", { month: "long" });
  const day = check.toLocaleString("en-US", { day: "2-digit" });
  const year = check.getFullYear();

  return (
    <div className="date">
      <div className="date__month">{month}</div>
      <div className="date__year">{year}</div>
      <div className="date__day">{day}</div>
    </div>
  );
};

export default NoteDate;
