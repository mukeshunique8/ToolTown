"use client";
import React, { createContext, useState, useContext } from "react";

export const ModeContext = createContext(); // Export ModeContext

export const ModeProvider = ({ children }) => {
    const [darkmode, setDarkMode] = useState(false);
    const [isSearch,setIsSearch] = useState(false);
  return (
    <ModeContext.Provider
      value={{ darkmode, setDarkMode,isSearch,setIsSearch }}
    >
      {children}
    </ModeContext.Provider>
  );
};

export const useModeContext = () => useContext(ModeContext);

