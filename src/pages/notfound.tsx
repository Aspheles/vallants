import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white text-gray-800 px-4">
      <img
        className="w-[10rem] mb-6"
        src="/Vallants_logo.png"
        alt="Vallants Logo"
      />
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
        Something went wrong
      </h1>
      <p className="text-xl text-center text-gray-600 mb-8">
        We're sorry, but the page you're looking for doesn't exist or has been
        moved.
      </p>
      <Link to={"/"}>
        <button className="px-6 py-3 bg-[#6A00A1] text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-200">
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
