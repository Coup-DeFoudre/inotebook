import React, { useState } from "react";

const Contact = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({ name: "", review: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      name: formData.name,
      review: formData.review,
    };
    setReviews([...reviews, newReview]);
    setFormData({ name: "", review: "" });
  };

  return (
    <div className="bg-gray-900 text-white py-10 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Feedback</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="review">
              Review
            </label>
            <textarea
              id="review"
              name="review"
              rows="4"
              required
              className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500"
              value={formData.review}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2.5 px-4 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
            >
              Submit Review
            </button>
          </div>
        </form>
        <h2 className="text-3xl font-bold my-6">Customer Reviews</h2>
        {reviews.length === 0 && <p>No reviews yet.</p>}
        {reviews.map((review, index) => (
          <div key={index} className="border border-gray-600 rounded-md p-4 mb-4">
            <h3 className="text-lg font-semibold">{review.name}</h3>
            <p className="mt-2">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
