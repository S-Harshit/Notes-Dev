import "./index.css";
import { useState, useEffect } from "react";
export const Pagination = ({ notesPerPage, totalNotes, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalNotes / notesPerPage); i++) {
    pageNumbers.push(i);
    console.log(i);
  }
  return (
    <>
      <nav>
        <ul>
          {pageNumbers.map((number) => {
            return (
              <li onClick={() => paginate(number)} key={number}>
                <a href="!#">{number}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
