import api from "../lib/axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isAxiosError } from "axios";

export async function postNote(onAdd, note) {
  // Ensure the note object has the required fields
  if (!note.title || !note.content) {
    toast.error("Title and content are required");
    return;
  }

  try {
    const { data } = await api.post("/add", note);
    onAdd(data.note);
    toast.success(data.message);
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      toast.error(error.message);
    }
  }
}

export async function getAllNotes(setNotes, setLoading) {
  // Function to fetch notes from the backend
  const getNotes = async () => {
    try {
      const { data } = await api.get("/");
      setNotes(data); // Assuming the response contains an array of notes
    } catch (error) {
      console.error("Error fetching notes:", error);
    } finally {
      setLoading(false);
    }
  };

  getNotes();
}
