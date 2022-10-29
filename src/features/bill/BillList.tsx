import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectBillList } from "./billSlice";
import BillItem from "./components/BillItem";

const BillList = () => {
  const billList = useAppSelector(selectBillList);

  return (
    <table className="w-full text-sm">
      <thead className="bg-gray-100 sticky top-0">
        <tr>
          <th className="p-2">#Id</th>
          <th>Category</th>
          <th>Description</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className="text-center">
        {billList.map((bill) => (
          <BillItem key={bill.id} {...bill} />
        ))}
      </tbody>
    </table>
  );
};

export default BillList;
