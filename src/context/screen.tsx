import { createContext, useState, useContext, useEffect } from "react";

const screenContext = createContext<ScreenContextContextValue>({
  height: 0,
  width: 0,
});

export const ScreenProvider = ({ children }: { children: React.ReactNode }) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

    function handleResize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const value = { width, height };

  return (
    <screenContext.Provider value={value}>{children}</screenContext.Provider>
  );
};

interface ScreenContextContextValue {
  width: number;
  height: number;
}

export const useScreen = () => useContext(screenContext);
export const useMediaQuery = (breakPoint: number) => {
  const { width } = useScreen();
  return width > breakPoint;
};
