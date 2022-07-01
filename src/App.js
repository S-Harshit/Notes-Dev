import "./App.css";
import { NotesContainer } from "./components/note-container";
import { Pagination } from "./components/pagination";

function App() {
  return (
    <div className="page">
      <h1>Notes</h1>
      <hr></hr>
      <NotesContainer />
      <Pagination />
    </div>
  );
}

export default App;
