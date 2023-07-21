import { createContext, useState, useContext } from "react";

export const asideContext = createContext<AsideContextContextValue>({
  showAside: false,
  setShowAside: () => {},
});

export function AsideProvider({ children }: { children: React.ReactNode }) {
  const [showAside, setShowAside] = useState(false);

  const value = { showAside, setShowAside };

  return (
    <asideContext.Provider value={value}>{children}</asideContext.Provider>
  );
}

export const useAside = () => useContext(asideContext);

interface AsideContextContextValue {
  showAside: boolean;
  setShowAside: React.Dispatch<React.SetStateAction<boolean>>;
}
