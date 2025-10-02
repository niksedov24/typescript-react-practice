import React, { useEffect, useState } from "react";
import Logo from "../../assets/Logo.png";
import ActionButton from "@/utils/ActionButton";
import CustomLink from "./Link";
import { navLinks, type TSectionID } from "../../types/type";
import useMediaQuery from "@/hooks/useMedia";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState<TSectionID | null>(
    navLinks[0]?.id || null
  );

  const [isTopPage, setIsTopPage] = useState<boolean>(true);
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  const isAboveMediaScreen = useMediaQuery("(min-width: 1120px)");

  const navbarbg = isTopPage ? "" : "bg-primary-100 drop-shadow";

  useEffect(() => {
    const handleScroll = () => {
      setIsTopPage(window.scrollY === 0);

      navLinks.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (
            window.scrollY >= offsetTop - 100 &&
            window.screenY < offsetBottom - 100
          ) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSetActive = (TSectionID: TSectionID) => {
    setActiveSection(TSectionID);
  };

  return (
    <nav className="relative h-[88px]">
      <div
        className={` ${navbarbg} ${
          isTopPage ? "py-6" : "py-4"
        }  animate fixed top-0 py-6 z-30 w-full`}
      >
        <div className="mx-auto w-5/6 flex-between">
          <div className="flex-between gap-20 w-full">
            <img src={Logo} alt="Logo" />
            {isAboveMediaScreen ? (
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
            ) : (
              <>
                <button
                  className="rounded-full bg-secondary-500 p-2 animate"
                  onClick={() => setIsMenuToggled((prev) => !prev)}
                >
                  <Bars3Icon className="h-6 w-6 text-white animate" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
