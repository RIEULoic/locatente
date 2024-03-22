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
        <div className="grid grid-cols-12  bg-violet-400/40">
          <div className="pl-10 pt-1 ">
            <Image
              src="/images/logo2.png"
              alt="locatent logo"
              width={100}
              height={100}
            />
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
                    className="dropdown-content z-[1] menu p-2  border-zinc-300 bg-zinc-200 rounded-box w-52"
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
                    className="dropdown-content z-[1] menu p-2  border-zinc-300 bg-zinc-200 rounded-box w-52"
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
