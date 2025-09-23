import type { TSectionID } from "../types/type";
import { Link } from "react-scroll";

import React from "react";

type Props = {
  children: React.ReactNode;
  to?: TSectionID;
  variant: "link" | "button";
};

const ActionButton = ({ children, to, variant }: Props) => {
  return variant === "link" && to ? (
    <Link
      to={to}
      className="rounded-md bg-secondary-500 px-10 py-2 cursor-pointer hover:bg-primary-500 hover:text-white animate"
    >
      {children}
    </Link>
  ) : (
    <button className="rounded-md bg-primary-500 px-10 py-2 cursor-pointer hover:bg-secondary-500 hover:text-white animate">
      {children}
    </button>
  );
};

export default ActionButton;
