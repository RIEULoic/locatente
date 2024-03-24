"use client";

import { createContext, useContext, useState } from "react";

const NavbarStateContext = createContext();

export const useNavbarState = () => {
  return useContext(NavbarStateContext);
};

export const NavbarStateProvider = ({ children }) => {
  const [isHeroNavbarExpanded, setHeroNavbarExpanded] = useState(true);

  return (
    <NavbarStateContext.Provider
      value={{ isHeroNavbarExpanded, setHeroNavbarExpanded }}
    >
      {children}
    </NavbarStateContext.Provider>
  );
};
