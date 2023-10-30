"use client";
import React, { useReducer } from "react";
import SuccessMassage from "../successMessage/SuccessMassage";
import Bug from "../bugError/Bug";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const UpdateUserForm = () => {
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(formData).length == 0)
      return console.log("don't have a form data");
    console.log(formData);
  };

  // if (Object.keys(formData).length > 0)
  //   return <Bug message={"something error!"} />;
  // if (Object.keys(formData).length > 0)
  //   return <SuccessMassage message={"Data Addede"} />;

  return (
    <div className="container mx-auto mt-3">
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6 w-2/3">
          <div className="input-type">
            <input
              onChange={setFormData}
              type="text"
              name="firstName"
              className="border rounded-sm focus:outline-none px-5 py-3 w-full"
              placeholder="First-Name"
              id=""
            />
          </div>
          <div className="input-type">
            <input
              onChange={setFormData}
              type="text"
              name="lastName"
              className="border rounded-sm focus:outline-none px-5 py-3 w-full"
              placeholder="Last-Name"
              id=""
            />
          </div>
          <div className="input-type">
            <input
              onChange={setFormData}
              type="email"
              name="email"
              className="border rounded-sm focus:outline-none px-5 py-3 w-full"
              placeholder="Email"
              id=""
            />
          </div>
          <div className="input-type">
            <input
              onChange={setFormData}
              type="text"
              name="salary"
              className="border rounded-sm focus:outline-none px-5 py-3 w-full"
              placeholder="Salary"
              id=""
            />
          </div>
          <div className="input-type">
            <input
              onChange={setFormData}
              type="date"
              name="date"
              className="border rounded-sm focus:outline-none px-5 py-3 w-full"
              id=""
            />
          </div>
          <div className="flex gap-10 items-center my-4">
            <div className="form-check">
              <input
                onChange={setFormData}
                type="radio"
                name="status"
                value="active"
                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 focus:outline-none transition duration-300   checked:border-green-500 mt-1 bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id="radioDefault1"
              />
              <label
                htmlFor="radioDefault1"
                className="inline-block text-gray-800"
              >
                Active
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={setFormData}
                type="radio"
                name="status"
                value="inactive"
                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 focus:outline-none transition duration-300   checked:border-green-500 mt-1 bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id="radioDefault2"
              />
              <label
                htmlFor="radioDefault2"
                className="inline-block text-gray-800"
              >
                Inactive
              </label>
            </div>
          </div>
        </div>

        <div className="w-2/12 my-4 ">
          <button
            className="text-white w-full py-2 px-4 bg-yellow-400 rounded transition duration-300 hover:bg-yellow-500 "
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUserForm;
