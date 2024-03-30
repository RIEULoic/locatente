"use client";
import Link from "next/link";
import { useNavbarState } from "@/context/NavbarStateContext";
import Image from "next/image";
import RentalForm from "./RentalForm";

const Navbar = () => {
  const { isHeroNavbarExpanded } = useNavbarState();

  const handleScrollToAgencies = () => {
    // console.log("scrolling to agencies list");
    const agenciesDiv = document.getElementById("agencies");
    if (agenciesDiv) {
      const offsetTop = agenciesDiv.offsetTop - 300;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }

    //petite tech pour enlever le focus du bouton. Dans daisyui le dropdown reste ouvert si le bouton a le focus
    const elem = document.activeElement;
    if (elem) {
      elem?.blur();
    }
  };

  const handleClick = () => {
    const elem = document.activeElement;
    if (elem) {
      elem?.blur();
    }
  };

  return (
    <div className="fixed w-full z-50 top-0 ">
      <div
        className={`blur-container ${
          isHeroNavbarExpanded ? "" : "rounded-b-full"
        } overflow-hidden  `}
      >
        <div className="grid grid-cols-12  bg-violet-400/40">
          <div className="pl-10 pt-1 ">
            <Link href="/">
              <Image
                src="/images/logo2.png"
                alt="locatent logo"
                width={100}
                height={100}
              />
            </Link>
          </div>
          <div className="col-span-11">
            <div>
              <div className="flex justify-end gap-5  p-1 ">
                <div>lolove@yopmail.com</div>
                <div className="pr-2">06 93 65 43 21</div>
              </div>
            </div>
            <div className="flex align-center justify-around pb-4  ">
              <div className="expandable-dropdown-container">
                <div className="dropdown dropdown-hover">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn m-1 border-zinc-300 bg-zinc-200"
                  >
                    Choisir un véhicule
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2  border-zinc-300 bg-zinc-200 rounded-box w-52"
                  >
                    <li onClick={handleClick}>
                      <a>Véhicules en location</a>
                    </li>
                    <li onClick={handleClick}>
                      <a>Véhicules à la vente</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="expandable-dropdown-container">
                <div className="dropdown dropdown-hover">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn m-1 border-zinc-300 bg-zinc-200"
                  >
                    Agence de location
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2  border-zinc-300 bg-zinc-200 rounded-box w-52"
                  >
                    {/* 
                    We can't use <button> here because Safari has a bug that prevents the button from being   focused.
                    <div role="button" tabindex="0"> is a workaround for this bug.
                    It is accessible and works in all browsers. */}
                    <li
                      tabIndex={0}
                      role="button"
                      onClick={handleScrollToAgencies}
                    >
                      <div>Liste des agences</div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="expandable-dropdown-container">
                <div className="dropdown dropdown-hover">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn m-1 border-zinc-300 bg-zinc-200"
                  >
                    Équipement de camping
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2  border-zinc-300 bg-zinc-200 rounded-box w-52"
                  >
                    <li onClick={handleClick}>
                      <a>Item 1</a>
                    </li>
                    <li onClick={handleClick}>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div style={{ display: isHeroNavbarExpanded ? "none" : "block" }}>
                <div className="px-2 pb-1  relative  left-1/2 -translate-x-1/2  rounded-b-full">
                  <RentalForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
