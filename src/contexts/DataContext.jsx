import { createContext } from "react";

export const DataContext = createContext(null);

export function DataContextProvider({ children, value }) {
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
