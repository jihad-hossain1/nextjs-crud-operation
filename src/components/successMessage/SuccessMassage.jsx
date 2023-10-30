import React from "react";
import { BsCheck2 } from "react-icons/bs";
const SuccessMassage = ({ message }) => {
  return (
    <div className="success container mx-auto">
      <div className="flex justify-center mx-auto border border-yellow-200 bg-yellow-400 w-3/6 text-gray-900 text-md my-4 text-center bg-opacity-5">
        {message} <BsCheck2 className="text-green-600 " size={25} />
      </div>
    </div>
  );
};

export default SuccessMassage;
