import React from "react";

const Form = () => {
  return (
    <div className="container mx-auto mt-3">
      <form>
        <div className="grid md:grid-cols-2 gap-6 w-2/3">
          <div className="input-type">
            <input
              type="text"
              name="firstName"
              className="border rounded-sm focus:outline-none px-5 py-3 w-full"
              placeholder="First-Name"
              id=""
            />
          </div>
          <div className="input-type">
            <input
              type="text"
              name="lastName"
              className="border rounded-sm focus:outline-none px-5 py-3 w-full"
              placeholder="Last-Name"
              id=""
            />
          </div>
          <div className="input-type">
            <input
              type="email"
              name="email"
              className="border rounded-sm focus:outline-none px-5 py-3 w-full"
              placeholder="Email"
              id=""
            />
          </div>
          <div className="input-type">
            <input
              type="text"
              name="salary"
              className="border rounded-sm focus:outline-none px-5 py-3 w-full"
              placeholder="Salary"
              id=""
            />
          </div>
          <div className="input-type">
            <input
              type="date"
              name="date"
              className="border rounded-sm focus:outline-none px-5 py-3 w-full"
              id=""
            />
          </div>
          <div className="flex gap-10 items-center my-4">
            <div className="form-check">
              <input
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
            className="text-white w-full py-2 px-4 bg-green-600 rounded transition duration-300 hover:bg-green-500 "
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
