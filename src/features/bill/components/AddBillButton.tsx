import React from "react";
import { useDispatch } from "react-redux";
import { showBillForm } from "../billSlice";

const AddBillButton = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(showBillForm())}
      className="bg-blue-400 text-white px-4 py-2 rounded-md"
    >
      Add Bill
    </button>
  );
};

export default AddBillButton;
