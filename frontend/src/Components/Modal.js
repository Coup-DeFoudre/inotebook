import React from "react";

const Modal = ({
  isOpen,
  onClose,
  onSave,
  etitle,
  edescription,
  etag,
  onTitleChange,
  onDescriptionChange,
  onTagChange,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={() => onClose(false)}
      />
      <div className="bg-white rounded-md p-8 z-50 w-full sm:w-96">
        <h2 className="text-xl font-bold mb-4 text-black">Edit Note</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="etitle"
              value={etitle}
              minLength={3}
              required
              onChange={(e) => onTitleChange(e.target.value)}
              className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              value={edescription}
              name="edescription"
              minLength={5}
              required
              onChange={(e) => onDescriptionChange(e.target.value)}
              className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Tag
            </label>
            <input
              type="text"
              value={etag}
              name="etag"
              onChange={(e) => onTagChange(e.target.value)}
              className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200 text-black"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
              onClick={() => onClose(false)}
            >
              Close
            </button>
            <button
              disabled={etitle.length < 3 || edescription.length < 5}
              type="button"
              className="mr-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
              onClick={onSave}
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
