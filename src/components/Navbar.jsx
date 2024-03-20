"use client";

import { useNavbarState } from "@/context/NavbarStateContext";
import Image from "next/image";
import RentalForm from "./RentalForm";

const Navbar = () => {
  const { isHeroNavbarExpanded } = useNavbarState();

  return (
    <div className="fixed w-full z-50 top-0 ">
      <div
        className={`blur-container ${
          isHeroNavbarExpanded ? "" : "rounded-b-full"
        } overflow-hidden  `}
      >
        <div>
          <div className="flex justify-end gap-5  bg-violet-400/40 p-1 ">
            <div>lolove@yopmail.com</div>
            <div className="pr-2">06 93 65 43 21</div>
          </div>
        </div>
        <div className="flex align-center justify-around pb-4 bg-violet-400/40 ">
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
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
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
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
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
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div style={{ display: isHeroNavbarExpanded ? "none" : "block" }}>
            <div className="  bg-violet-400/40 px-2 pb-1  relative  left-1/2 -translate-x-1/2  rounded-b-full">
              <RentalForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
