import React from "react";
import { useAppDispatch } from "../../../app/hooks";
import { Categories } from "../../../types";
import { changeCategory } from "../billSlice";

const SelectCategoryButton = () => {
  const dispatch = useAppDispatch();
  return (
    <select
      onChange={(e) => {
        dispatch(
          changeCategory(e.target.value as Categories | "All Categories")
        );
      }}
      className="border border-gray-300 rounded-md px-4 py-2 mx-6"
    >
      <option value="All Categories">All Categories</option>
      {Object.values(Categories).map((b) => (
        <option key={b} value={b}>
          {b}
        </option>
      ))}
    </select>
  );
};

export default SelectCategoryButton;
