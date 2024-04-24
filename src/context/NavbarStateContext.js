"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const NavbarStateContext = createContext();

export const useNavbarState = () => {
  return useContext(NavbarStateContext);
};

export const NavbarStateProvider = ({ children }) => {
  const [isRentalFormContainerExpanded, setRentalFormContainerExpanded] =
    useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setRentalFormContainerExpanded(true);
  }, [pathname]);

  return (
    <NavbarStateContext.Provider
      value={{ isRentalFormContainerExpanded, setRentalFormContainerExpanded }}
    >
      {children}
    </NavbarStateContext.Provider>
  );
};
