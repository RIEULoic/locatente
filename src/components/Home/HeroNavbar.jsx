"use client";

import { useNavbarState } from "@/context/NavbarStateContext";
import { useEffect, useState } from "react";

function HeroNavbar() {
  const { isHeroNavbarExpanded, setHeroNavbarExpanded } = useNavbarState();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 650) {
        setHeroNavbarExpanded(false);
        console.log("false à " + window.scrollY);
      } else {
        setHeroNavbarExpanded(true);
        console.log("true à " + window.scrollY);
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
      <div className=" flex">
        <div className="flex items-center m-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>

          <input
            type="text"
            placeholder="Lieu de départ"
            className="p-2 outline-none bg-transparent border-b-2 border-gray-400"
          />
        </div>
        <div className="flex flex-col m-2">
          <div className="text-gray-400">Date de départ</div>
          <input
            type="date"
            className=" outline-none bg-transparent text-black "
          />
        </div>
        <div className="flex flex-col m-2">
          <div className="text-gray-400">Date de retour</div>
          <input
            type="date"
            className=" outline-none bg-transparent text-black"
          />
        </div>
        <button className="btn btn-info m-2 rounded-full">Rechercher</button>
      </div>
    </div>
  );
}

export default HeroNavbar;
