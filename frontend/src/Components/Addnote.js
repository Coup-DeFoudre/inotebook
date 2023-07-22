import React, { useState } from "react";
import { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Addnote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleAddnote = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-8">
      {/* Form to add notes */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Add a Note</h2>
        <div className="flex flex-wrap md:grid grid-cols-1 md:grid-cols-3 gap-4 ">
          <input
            type="text"
            placeholder="Title"
            minLength={3}
            required
            id="title"
            name="title"
            value={note.title}
            className="p-2 border rounded-md w-full text-black"
            onChange={onChange}
          />
          <input
            type="text"
            placeholder="Description"
            id="description"
            name="description"
            minLength={5}
            required
            value={note.description}
            className="p-2 border rounded-md w-full text-black"
            onChange={onChange}
          />
          <input
            type="text"
            placeholder="Tag"
            id="tag"
            name="tag"
            minLength={5}
            required
            value={note.tag}
            className="p-2 border rounded-md w-full text-black"
            onChange={onChange}
          />
          <button
            disabled={note.title.length < 3 || note.description.length < 5}
            className="col-span-3 bg-blue-500 text-white py-2 px-4 rounded-md"
            onClick={handleAddnote}
          >
            Add Note
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addnote;
