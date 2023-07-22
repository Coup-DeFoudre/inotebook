import React from "react";
import { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const { note,updateNote } = props;
  const context = useContext(noteContext);
  const { deleteNote } = context;

  const handleDelete = () => {
    deleteNote (note._id);
  };
  return (
    <div>
      <div className="grid md:grid grid-cols-1 p-2 ">
        <div className="border rounded-md p-4 space-y-4 ">
          <h3 className="text-xl font-semibold">{note.title}</h3>
          <p className="text-lg text-justify">
            {note.description}
          </p>
          <p className="text-sm">
            <strong>Tags : </strong>
            {note.tag}
          </p>
          <p className="text-sm">
            <strong>Date : </strong>
            {new Date (note.date).toDateString()}
          </p>
          <div className="space-x-4">
            <button><i onClick={handleDelete} className="fa-solid fa-trash-can "></i></button>
            <button> <i className="fa-solid fa-pen-to-square " onClick={()=>{updateNote(note)}}></i></button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
