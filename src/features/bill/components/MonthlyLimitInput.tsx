import React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectMonthlyLimit, updateMonthlyLimit } from "../billSlice";

const MonthlyLimitInput = () => {
  const dispatch = useAppDispatch();
  const monthlyLimit = useAppSelector(selectMonthlyLimit);
  return (
    <div className="flex gap-2 items-center">
      <label htmlFor="monthlyLimit">Monthly Limit</label>
      <input
        className="bg-blue-100/50 px-4 py-2 rounded-md"
        type="number"
        name="monthlyLimit"
        id="monthlyLimit"
        value={monthlyLimit}
        onChange={(e) => {
          dispatch(updateMonthlyLimit(Number(e.target.value)));
        }}
      />
    </div>
  );
};

export default MonthlyLimitInput;
