import { useState, useEffect } from "react";

export const usePreloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Prevent scroll while loading
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  const handleComplete = () => {
    setIsLoading(false);
    // Tiny delay so Navbar doesn't flash before panels finish sliding
    setTimeout(() => {
      setIsComplete(true);
    }, 900);
  };

  return {
    isLoading,
    isComplete,
    handleComplete,
  };
};
