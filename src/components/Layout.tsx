import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 h-screen bg-gray-100 p-4">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout