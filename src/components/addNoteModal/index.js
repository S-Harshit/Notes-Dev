import "./index.css";

export const AddNoteModal = () => {
  return (
    <>
      <dialog className="addNoteContainer">
        <input className="title" type="text" name="title" placeholder="title" />

        <input
          className="tagline"
          type="text"
          name="tagline"
          placeholder="tagline"
        />

        <input className="body" type="text" name="content" placeholder="note" />
        <button>Cancel</button>
        <button>Add</button>
      </dialog>
    </>
  );
};
