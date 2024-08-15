import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import api from "../lib/axios";
import { getAllNotes } from "../api/NoteAPI";

function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  function addNote(newNote) {
    setNotes(prevNotes => [...prevNotes, newNote]);
  }

  async function deleteNote(id) {
    try {
      const {data} = await api.delete(`/note/${id}`);
      setNotes((prevItems) => prevItems.filter((item) => item.id !== id));
      toast.success(data.message);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllNotes(setNotes, setLoading);
  }, []);

  if(loading) return <div>Loading...</div>

  return (
    <div>
      <Header />
      <ToastContainer />
      <CreateArea onAdd={addNote} />
      
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={noteItem.id}
            createdAt={noteItem.created_at}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;