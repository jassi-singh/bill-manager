import React from "react";
import BillList from "../features/bill/BillList";
import AddBillButton from "../features/bill/components/AddBillButton";
import SelectCategoryButton from "../features/bill/components/SelectCategoryButton";
import TotalAmount from "../features/bill/components/TotalAmount";

const Dashboard = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center p-4">
        <div>My Bills</div>
        <div>
          <SelectCategoryButton />
          <AddBillButton />
        </div>
      </div>
      <div className="grow overflow-auto">
        <BillList />
      </div>
      <div className="">
        <TotalAmount />
      </div>
    </div>
  );
};

export default Dashboard;
