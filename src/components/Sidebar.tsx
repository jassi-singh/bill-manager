import React from "react";
import { FaHome } from "react-icons/fa";
import { HiTrendingUp } from "react-icons/hi";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <div className="w-1/6 flex flex-col items-center">
      <div className="text-3xl font-bold tracking-widest text-blue-400 my-4">Bill IT</div>
      <ul className="w-full">
        <SidebarItem icon={<FaHome />} title="Dashboard" />
        <SidebarItem icon={<HiTrendingUp />} title="Analytics" />
      </ul>
    </div>
  );
};

export default Sidebar;
