"use client";

import { useNavbarState } from "@/context/NavbarStateContext";
import RentalForm from "./RentalForm";

const Navbar = () => {
  const { isHeroNavbarExpanded } = useNavbarState();

  return (
    <div className="fixed w-full z-50 top-0  ">
      <div className="blur-container ">
        <div className="flex justify-end gap-5 bg-gray-200/40 p-1 ">
          <div>lolove@yopmail.com</div>
          <div>06 93 65 43 21</div>
        </div>
      </div>
      <div
        className={`blur-container ${
          isHeroNavbarExpanded ? "rounded-b-xl" : ""
        } overflow-hidden`}
      >
        <nav
          className={`flex justify-around bg-gray-200/40 ${
            isHeroNavbarExpanded ? "rounded-b-xl" : ""
          }  `}
        >
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1">
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
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1">
              Choisir une tente
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
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1">
              Agence de retrait
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
        </nav>
      </div>
      <div className="blur-container rounded-b-full overflow-hidden">
        <div style={{ display: isHeroNavbarExpanded ? "none" : "block" }}>
          <div className=" bg-gray-200/40 px-2   relative bottom-0 left-1/2 -translate-x-1/2  rounded-b-full">
            <RentalForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
