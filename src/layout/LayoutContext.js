import React, { createContext, useContext, useState } from "react";

const LayoutContext = createContext();
export const useLayout = () => useContext(LayoutContext);
export default function LayoutProvider({ children }) {
  const [open, setOpen] = useState(true);
  function toggleSidebar() {
    setOpen(!open);
  }
  return (
    <LayoutContext.Provider value={{ open, toggleSidebar }}>
      {children}
    </LayoutContext.Provider>
  );
}
