import React from "react";
import Link from "next/link";

import Line from "../Line";

import { MenuItemProps } from "./index.type";

const MenuItem = ({ label, href, active, hasChild }: MenuItemProps) => {
  return (
    <Link
      href={href}
      className="hover:bg-custom-black-secondary px-6 py-5 rounded-full text-sm"
    >
      <p
        className={`flex items-center gap-2 ${
          active ? "text-white" : "text-white/60"
        } font-light`}
      >
        {label}
      </p>
      {/* <div className="relative ">{active ? <Line /> : null}</div> */}
    </Link>
  );
};

export default MenuItem;
