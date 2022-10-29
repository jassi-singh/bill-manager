import React from "react";
import BillList from "../features/bill/BillList";
import AddBillButton from "../features/bill/components/AddBillButton";
import { Categories } from "../types";

const Dashboard = () => {
  return (
    <div className="w-full h-full bg-white rounded-md drop-shadow-md relative">
      <div className="flex justify-between items-center p-4">
        <div>My Bills</div>
        <div>
          <select className="border border-gray-300 rounded-md px-4 py-2 mx-6">
            <option value="All Categories">All Categories</option>
            {Object.values(Categories).map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
          <AddBillButton />
        </div>
      </div>
      <BillList />
    </div>
  );
};

export default Dashboard;
