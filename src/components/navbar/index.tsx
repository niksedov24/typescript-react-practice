import React, { useState, useEffect } from "react";
import Logo from "../../assets/Logo.png";
import ActionButton from "@/utils/ActionButton";
import CustomLink from "./Link";
import { navLinks, type TSectionID } from "../../types/type";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState<TSectionID | null>(
    navLinks[0]?.id || null
  );

  const handleSetActive = (TSectionID: TSectionID) => {
    setActiveSection(TSectionID);
  };

  return (
    <nav className="relative h-[88px]">
      <div className="fixed top-0 z-30 w-full">
        <div className="mx-auto w-5/6 flex-between">
          <div className="flex-between gap-20 w-full">
            <img src={Logo} alt="Logo" />
            <div className="flex-between w-full">
              <div className="flex-between gap-8 text-sm">
                {navLinks.map((link) => (
                  <CustomLink
                    children={link.id}
                    activeSection={activeSection}
                    section={link.id}
                    onClick={handleSetActive}
                    key={link.id}
                  ></CustomLink>
                ))}
              </div>
              <div className="flex-between gap-8">
                <button className="rounded-md bg-primary-500 px-10 py-2 cursor-pointer hover:bg-secondary-500 hover:text-white animate">
                  Sign In
                </button>
                <ActionButton variant="link" to="contactus">
                  Became a member
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
