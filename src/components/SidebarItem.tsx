import React from "react";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
type SidebarItemType = {
  icon: React.ReactNode;
  title: string;
};

const SidebarItem = (params: SidebarItemType) => {
  const location = useLocation();

  return (
    <Link
      to={`/${params.title.toLowerCase()}`}
      className={clsx(
        "flex items-center text-lg rounded-lg p-4 m-2 hover:bg-blue-100",
        {
          "bg-blue-200": location.pathname === `/${params.title.toLowerCase()}`,
        }
      )}
    >
      {params.icon}
      <span className="pl-4">{params.title}</span>
    </Link>
  );
};

export default SidebarItem;
