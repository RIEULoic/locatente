"use client";

import { createContext, useContext, useState } from "react";

const NavbarStateContext = createContext();

export const useNavbarState = () => {
  return useContext(NavbarStateContext);
};

export const NavbarStateProvider = ({ children }) => {
  const [isRentalFormContainerExpanded, setRentalFormContainerExpanded] =
    useState(true);

  return (
    <NavbarStateContext.Provider
      value={{ isRentalFormContainerExpanded, setRentalFormContainerExpanded }}
    >
      {children}
    </NavbarStateContext.Provider>
  );
};
