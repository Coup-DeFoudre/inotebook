import React, { useContext, useEffect, useState } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import Modal from "./Modal";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;
  const [isModalOpen, setModalOpen] = useState(false);
  const [etitle, setTitle] = useState("");
  const [edescription, setDescription] = useState("");
  const [etag, setTag] = useState("");
  const [currentNote, setCurrentNote] = useState(null); // Store the currently selected note

  useEffect(() => {
    getNotes();

    // eslint-disable-next-line
  }, []);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleSaveChanges = () => {
    // Call the editNote function with separate arguments
    editNote(currentNote._id, etitle, edescription, etag);

    // Close the modal after saving changes
    handleModalClose();
  };

  const updateNote = (note) => {
    setCurrentNote(note); // Store the currently selected note
    setTitle(note.title);
    setDescription(note.description);
    setTag(note.tag);
    handleModalOpen();
  };

  return (
    <div>
      <div className="Modal">
        <div className="flex justify-center items-center ">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md hidden"
            onClick={handleModalOpen}
          >
            Open Modal
          </button>

          <Modal
            isOpen={isModalOpen}
            onClose={handleModalClose}
            onSave={handleSaveChanges}
            etitle={etitle}
            edescription={edescription}
            etag={etag}
            onTitleChange={setTitle}
            onDescriptionChange={setDescription}
            onTagChange={setTag}
          />
        </div>
      </div>
      <h2 className="text-2xl font-semibold my-4">All Notes</h2>
      {Array.isArray(notes) && notes.length === 0 && "Your iNotebook is empty. Start jotting down your thoughts!"}

      {Array.isArray(notes) &&
        notes.map((note) => (
          <NoteItem key={note._id} updateNote={updateNote} note={note} />
        ))}
    </div>
  );
};

export default Notes;
