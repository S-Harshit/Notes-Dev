import "./index.css";
import { useEffect } from "react";
export const EditNote = ({ note }) => {
  return (
    <>
      <dialog className="editNoteContainer">
        <p className="cancel">Press Esc to Cancel</p>
        <input
          className="title"
          type="text"
          name="title"
          defaultValue={note.title}
        />

        <input
          className="tagline"
          type="text"
          name="tagline"
          defaultValue={note.tagline}
        />

        <input
          className="body"
          type="text"
          name="content"
          defaultValue={note.body}
        />

        <button>Confirm</button>
      </dialog>
    </>
  );
};
