import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useAppDispatch } from "../../../app/hooks";
import { Bill } from "../../../types";
import { deleteBill, showBillForm } from "../billSlice";

const BillItem = (params: Bill) => {
  const dispatch = useAppDispatch();
  return (
    <tr className="border-b">
      <td className="py-4">{params.id}</td>
      <td>{params.category}</td>
      <td className="max-w-0">{params.description}</td>
      <td>{new Date(params.date).toISOString().split("T")[0]}</td>
      <td>{params.amount}</td>
      <td>
        <button
          onClick={() => dispatch(showBillForm(params))}
          className="text-blue-400 px-4 py-2 rounded-md mr-4 ring-1 ring-blue-400 hover:bg-blue-400 hover:text-white"
        >
          <AiFillEdit />
        </button>
        <button
          onClick={() => dispatch(deleteBill(params.id))}
          className="text-red-400 px-4 py-2 rounded-md ring-1 ring-red-400 hover:bg-red-400 hover:text-white"
        >
          <AiFillDelete />
        </button>
      </td>
    </tr>
  );
};

export default BillItem;
