import React from "react";
import { CiWarning } from "react-icons/ci";
const Bug = ({ message }) => {
  return (
    <div className="success container mx-auto">
      <div className="flex justify-center mx-auto border border-red-200 bg-red-400 w-3/6 text-gray-900 text-md my-4 text-center bg-opacity-5">
        {message} <CiWarning className="text-red-600 " size={25} />
      </div>
    </div>
  );
};

export default Bug;
