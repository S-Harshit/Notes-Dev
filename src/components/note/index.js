import React from "react";
import "./index.css";
import { useEffect } from "react";
export const Note = ({ note, del }) => {
  useEffect(() => {
    let dele = document.querySelectorAll(".delete");
    dele.forEach((deletebtn) => {
      deletebtn.addEventListener("click", (e) => {
        console.log(e.target.parentElement.childNodes[2]);
        del(e.target.parentElement.childNodes[2]);
        console.log("clicked asdasd asd ");
        e.stopImmediatePropagation();
        e.preventDefault();
        e.stopPropagation();

        // onClick={del(note.tagline)}
      });
    });
  }, []);

  return (
    <div className="note">
      <button className="delete">&#x2717;</button>
      <h2>{note.title}</h2>
      <h3>{note.tagline}</h3>
      <p>{note.body}</p>
    </div>
  );
};
