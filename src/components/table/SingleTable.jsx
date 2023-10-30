import React from "react";
import { HiOutlinePencilSquare, HiOutlineTrash } from "react-icons/hi2";

const SingleTable = ({ item }) => {
  return (
    <>
      <tr className="bg-gray-50 text-center">
        <td className="px-16 py-2 flex-row items-center">
          <img src="#" alt="" />
          <span className="text-center ml-2 font-semibold">{item?.name}</span>
        </td>
        <td className="px-16 py-2 ">
          <span className="">{item?.email}</span>
        </td>
        <td className="px-16 py-2 ">
          <span className="">{item?.salary}$</span>
        </td>
        <td className="px-16 py-2 ">
          <span className="">{item?.date}</span>
        </td>
        <td className="px-16 py-2 ">
          <span className="bg-green-500 py-1 text-white px-5 rounded-full">
            {item?.status}
          </span>
          {/* <span className=""></span> */}
        </td>
        <td className="px-16 py-2 flex gap-2 items-center">
          <button>
            <HiOutlinePencilSquare className="hover:text-green-500" size={25} />
          </button>
          <button>
            <HiOutlineTrash className="hover:text-red-500" size={25} />
          </button>
        </td>
      </tr>
    </>
  );
};

export default SingleTable;
