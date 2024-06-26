"use client";

import Image from "next/image";
import Link from "next/link";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useNavbarState } from "@/context/NavbarStateContext";
import RentalForm from "./RentalForm";

const Navbar = () => {
  const router = useRouter();

  const { isRentalFormContainerExpanded, setRentalFormContainerExpanded } =
    useNavbarState();

  useEffect(() => {
    const handleScroll = () => {
      if (document.getElementById("rental-form-container") == null) return;

      const RentalFormContainerPosition = document
        .getElementById("rental-form-container")
        .getBoundingClientRect();
      // console.log("heronavpos : " + RentalFormContainerPosition.top);
      // console.log("window.scrollY : " + window.scrollY);
      const shouldModif =
        window.scrollY <= RentalFormContainerPosition.top + 650;
      if (shouldModif !== isRentalFormContainerExpanded) {
        //console.log("modifying");
        setRentalFormContainerExpanded(shouldModif);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    //{passive: true} pour améliorer les performances. J'ai rajouter ça car je prends des warnings de partout en console. Du genre "Added non-passive event listener to a scroll-blocking 'touchstart' event. Consider marking event handler as 'passive' to make the page more responsive. See https://www.chromestatus.com/feature/5745543795965952". Mais visiblement, c'est swiper qui fout la merde

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isRentalFormContainerExpanded]);
  /*Pas clair cette histoire de dépendance */

  const handleScrollToSection = (params) => {
    const sectionDiv = document.getElementById(params);

    if (sectionDiv) {
      const offsetTop = sectionDiv.offsetTop - 300;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    } else {
      router.push("/");
      setTimeout(() => {
        const sectionDiv = document.getElementById(params);
        const offsetTop = sectionDiv.offsetTop - 300;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }, 1000);
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
          isRentalFormContainerExpanded ? "" : "rounded-b-full"
        } overflow-hidden  `}
      >
        <div className="grid grid-cols-12  bg-violet-400/40">
          <div className="pl-10 pt-[0.10rem] ">
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
                    className="btn m-1 btn-active-color"
                  >
                    Choisir un véhicule
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2  btn-active-color rounded-box w-52"
                  >
                    {/* 
                    We can't use <button> here because Safari has a bug that prevents the button from being   focused.
                    <div role="button" tabindex="0"> is a workaround for this bug.
                    It is accessible and works in all browsers. */}
                    <li
                      tabIndex={0}
                      role="button"
                      onClick={() => handleScrollToSection("rental-cars")}
                    >
                      <div>Véhicules en location</div>
                    </li>
                    <li
                      tabIndex={0}
                      role="button"
                      onClick={() => handleScrollToSection("cars-for-sale")}
                    >
                      <div>Véhicules à la vente</div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="expandable-dropdown-container">
                <div className="dropdown dropdown-hover">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn m-1 btn-active-color"
                  >
                    Agence de location
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 btn-active-color rounded-box w-52"
                  >
                    {/* 
                    We can't use <button> here because Safari has a bug that prevents the button from being   focused.
                    <div role="button" tabindex="0"> is a workaround for this bug.
                    It is accessible and works in all browsers. */}
                    <li
                      tabIndex={0}
                      role="button"
                      onClick={() => handleScrollToSection("agencies")}
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
                    className="btn m-1 btn-active-color"
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
              <div
                style={{
                  display: isRentalFormContainerExpanded ? "none" : "block",
                }}
              >
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
