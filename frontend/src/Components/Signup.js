import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //  Implement signup logic
    const response = await fetch('http://localhost:5000/api/auth/createuser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name: formData.name, email: formData.email, username: formData.username, password: formData.password})
    })
    const json = await response.json()
    console.log(json)
    if(json.success){
        // Save the auth token and redirect
        localStorage.setItem('token', json.authtoken)
        window.location.href = "/"
    }else{
        alert("Invalid Credentials")
    }


    console.log(formData);
    setFormData({ name: '', email: '', username: '', password: '' });
  };

  return (
    <div className=" my-5 flex justify-center items-center"> 
      <div className="rounded-md p-8 w-full max-w-lg shadow-lg backdrop-brightness-50 backdrop-blur-sm ">
        <h2 className="text-3xl font-extrabold text-white mb-6">Create Your iNotebook Account</h2>
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
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              minLength={3}
              className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-6 relative">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              required
              minLength={6}
              className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500"
              value={formData.password}
              onChange={handleInputChange}
            />
            <span
              className="absolute right-3 mt-2.5 cursor-pointer"
              onClick={handleTogglePassword}
            >
              {showPassword ? (
                <svg
                  className="h-5 w-5 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.88 14.88A10.05 10.05 0 0012 17a10.05 10.05 0 00-5.88-2.12M12 2a4 4 0 014 4M8 6a4 4 0 014-4"
                  />
                </svg>
              )}
            </span>
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2.5  px-4 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
            >
              Sign up
            </button>
          </div>
          <div>
            <p className="text-center text-gray-300 text-sm mt-4">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-500 hover:text-blue-600">
                Log in
              </Link>
            </p>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
