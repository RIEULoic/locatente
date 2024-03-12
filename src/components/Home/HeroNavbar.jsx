"use client";

import { useNavbarState } from "@/context/NavbarStateContext";
import { useEffect } from "react";
import RentalForm from "../RentalForm";

function HeroNavbar() {
  const { isHeroNavbarExpanded, setHeroNavbarExpanded } = useNavbarState();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 650) {
        setHeroNavbarExpanded(false);
        //console.log("false à " + window.scrollY);
      } else {
        setHeroNavbarExpanded(true);
        //console.log("true à " + window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setHeroNavbarExpanded]);

  return (
    <div
      style={{ display: isHeroNavbarExpanded ? "block" : "none" }}
      className=" bg-white px-2 border-2 border-gray-400 absolute bottom-0 left-1/2 -translate-x-1/2 my-40 rounded-full"
    >
      <RentalForm />
    </div>
  );
}

export default HeroNavbar;
