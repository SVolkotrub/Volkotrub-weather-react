import React, { useState } from "react";

export const UnitsContext = React.createContext();

export default function TemperatureProvider({ children }) {
  const [unit, setUnit] = useState("celsius");
  const value = {
    unit,
    setUnit
  };

  return (
    <UnitsContext.Provider value={value}>{children}</UnitsContext.Provider>
  );
}