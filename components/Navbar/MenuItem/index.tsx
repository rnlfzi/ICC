import React from "react";
import Link from "next/link";

import Line from "../Line";
import { SlArrowDown } from "react-icons/sl";

import { MenuItemProps } from "./index.type";

const MenuItem = ({ label, href, active, hasChild = false }: MenuItemProps) => {
  return (
    <Link
      href={href}
      className="hover:bg-custom-black-secondary px-6 py-5 rounded-full text-sm relative"
    >
      <p
        className={`flex items-center gap-2 ${
          active ? "text-white" : "text-white/60"
        } font-light`}
      >
        {label}
        {hasChild ? <SlArrowDown size={10} /> : null}
      </p>
      <div className="block absolute z-50 top-12 left-8 w-6 h-2">
        {active && <Line />}
      </div>
    </Link>
  );
};

export default MenuItem;
