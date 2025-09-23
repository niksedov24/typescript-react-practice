import React from "react";
import type { TSectionID } from "../../types/type";
import { Link } from "react-scroll";

type Props = {
  section: TSectionID;
  children: React.ReactNode;
  onClick: (TSectionID: TSectionID) => void;
  activeSection: TSectionID | null;
};

const link = ({ section, children, onClick, activeSection }: Props) => {
  const isActive = activeSection === section;
  return (
    <Link
      to={section}
      onClick={() => onClick(section)}
      className={`animate hover:text-primary-300 cursor-pointer capitalize ${
        isActive ? "text-primary-500" : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default link;
