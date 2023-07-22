import React from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    company: "ABC Inc.",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus odio eget est venenatis, vel euismod velit viverra.",
  },
  {
    id: 2,
    name: "Jane Smith",
    company: "XYZ Corp.",
    comment:
      "Vivamus nec dui et neque efficitur accumsan. Suspendisse dictum erat a risus efficitur, nec ultrices arcu consequat.",
  },
  // Add more testimonials as needed
];

const About = () => {
  return (
    <div className="bg-gray-900 text-white py-10 px-4">
      <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-6">About iNotebook</h2>
        <p className="text-lg leading-relaxed mb-8">
          iNotebook is a note-taking application that helps you organize your
          thoughts, ideas, and tasks. It provides a simple and intuitive user
          interface for creating, editing, and managing your notes effectively.
          With iNotebook, you can access your notes from anywhere, as it is
          securely stored in the cloud. Whether you're a student, professional,
          or someone who loves jotting down ideas, iNotebook is the perfect tool
          to stay organized and productive.
        </p>
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-800 rounded-lg p-6 shadow-md"
            >
              <div className="text-lg font-semibold mb-3">
                {testimonial.name}
              </div>
              <div className="text-gray-400 text-sm mb-2">
                {testimonial.company}
              </div>
              <p className="text-sm leading-relaxed">
                {testimonial.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
