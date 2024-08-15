import DeleteIcon from "@mui/icons-material/Delete";
import { formatDate } from "../utils/util";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <div className="note__delete-section">
        <p className="note__date">{formatDate(props.createdAt)}</p>
        <button onClick={handleClick}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}

export default Note;
