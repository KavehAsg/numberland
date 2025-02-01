import { useEffect, useState } from "react";

const useSmallScreen = (breakPoint = 765) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < breakPoint);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < breakPoint);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isSmallScreen;
};

export default useSmallScreen;
