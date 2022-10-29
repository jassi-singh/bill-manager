import { Outlet } from "react-router-dom";
import BillForm from "../features/bill/components/BillForm";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 h-screen bg-gray-200 p-6">
        <Outlet />
      </div>
      <BillForm />
    </div>
  );
};

export default Layout;
