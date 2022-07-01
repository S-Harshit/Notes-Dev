import React from "react";

import { Note } from "../note";
import "./index.css";
import { useState, useEffect } from "react";
import { Pagination } from "../pagination";
import { EditNote } from "../editNote";
import { AddNoteModal } from "../addNoteModal";
import { type } from "@testing-library/user-event/dist/type";

export const NotesContainer = () => {
  const [notes, setNotes] = useState([
    {
      title: "Meeting",
      tagline: "Meeting at 3:00",
      body: "Remember to bring project files",
    },
    {
      title: "Interview",
      tagline: "Meeting at 4:00",
      body: "Remember to Practice Questions",
    },
    {
      title: "Meeting",
      tagline: "Meeting at 5:00",
      body: "Remember to bring project files",
    },
    {
      title: "Meeting",
      tagline: "Meeting at 6:00",
      body: "Remember to bring project files",
    },
    {
      title: "Meeting",
      tagline: "Meeting at 7:00",
      body: "Remember to bring project files",
    },
    {
      title: "Meeting",
      tagline: "Meeting at 8:00",
      body: "Remember to bring project files",
    },
    {
      title: "Meeting",
      tagline: "Meeting at 9:00",
      body: "Remember to bring project files",
    },
    {
      title: "Interview",
      tagline: "Meeting at 10:00",
      body: "Remember to Practice Questions",
    },
    {
      title: "Interview",
      tagline: "Meeting at 11:00",
      body: "Remember to Practice Questions",
    },
    {
      title: "Interview",
      tagline: "Meeting at 12:00",
      body: "Remember to Practice Questions",
    },
  ]);

  const [currentNote, setcurrentNote] = useState({});
  const [currentPage, setcurrentPage] = useState(1);
  const [notesPerPage, setnotesPerPage] = useState(6);

  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;
  const currentNotes = notes.slice(indexOfFirstNote, indexOfLastNote);

  let i = 0;

  const paginate = (pageNumber) => {
    setcurrentPage(pageNumber);
  };

  const deleteNote = (tagLine) => {
    const rem = notes.filter((note) => {
      return tagLine.innerText !== note.tagline;
    });
    setNotes(rem);
    console.log(rem);
    console.log(notes);
  };
  useEffect(() => {
    const notes = document.querySelectorAll(".note");
    notes.forEach((elem) => {
      let colorarr = [
        "rgba(218, 247, 166  0.6)",
        "rgba(255, 195, 0 , 0.6)",
        "rgba(204, 235, 255, 0.6)",
        "rgba(255, 87, 51, 0.6)",
        "rgba( 199, 0, 57,0.6)",
      ];
      elem.style.backgroundColor =
        colorarr[Math.floor(Math.random() * colorarr.length)];
    });
    const NotesContainer = document.querySelector(".notesContainer");
    NotesContainer.addEventListener("click", (e) => {
      let data = e.target.parentElement.childNodes;
      let prop = {
        title: data[1].outerText,
        tagline: data[2].outerText,
        body: data[3].outerText,
      };
      let editDialog = document.querySelector(".editNoteContainer");
      setcurrentNote(prop);
      console.log(prop);
      editDialog.showModal();
    });

    let addDialog = document.querySelector(".addNoteContainer");
    let addButton = document.querySelector(".addNote");
    let deleteButton = document.querySelector("span");

    // deleteButton.addEventListener("click", (e) => {
    //   console.log(deleteButton);
    //   notes = notes.splice();
    //   e.stopPropagation();
    // });
    addButton.addEventListener("click", (e) => {
      console.log("clicked" + e);
      addDialog.showModal();
    });
  }, []);

  return (
    <>
      <div className="notesContainer">
        {currentNotes.map((note) => {
          i++;
          return <Note key={i} note={note} del={deleteNote} />;
        })}
      </div>
      <Pagination
        notesPerPage={notesPerPage}
        totalNotes={notes.length}
        paginate={paginate}
      />
      <button className="addNote">Add Note</button>
      <EditNote note={currentNote} />
      <AddNoteModal />
    </>
  );
};
