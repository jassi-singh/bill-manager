import React from "react";
import { useAppSelector } from "../../../app/hooks";
import { selectTotalAmount } from "../billSlice";

const TotalAmount = () => {
  const totalAmount = useAppSelector(selectTotalAmount);
  return (
    <div className="grid grid-cols-2 bg-blue-400 p-4 items-center text-white">
      <div className="text-2xl font-bold">Total Amount</div>
      <div className="text-3xl justify-self-center font-bold">
        $ {totalAmount.toFixed(2)}
      </div>
    </div>
  );
};

export default TotalAmount;
