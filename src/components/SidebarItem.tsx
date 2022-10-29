import React from "react";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import { SidebarItemType } from "../types";

const SidebarItem = (params: SidebarItemType) => {
  const location = useLocation();

  return (
    <Link
      to={`/${params.title.toLowerCase()}`}
      className={clsx(
        "flex items-center text-lg rounded-lg p-4 m-2 hover:bg-blue-200",
        {
          "bg-blue-400 text-white": location.pathname === `/${params.title.toLowerCase()}`,
        }
      )}
    >
      {params.icon}
      <span className="pl-4">{params.title}</span>
    </Link>
  );
};

export default SidebarItem;
