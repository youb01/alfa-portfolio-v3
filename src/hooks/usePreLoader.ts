import { useState, useEffect } from "react";

const SESSION_KEY = "alfa_preloader_seen";

export const usePreloader = () => {
  const alreadySeen = sessionStorage.getItem(SESSION_KEY) === "1";

  const [isLoading,  setIsLoading]  = useState(!alreadySeen);
  const [isComplete, setIsComplete] = useState(alreadySeen);
  const [isRevealed, setIsRevealed] = useState(alreadySeen);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isLoading]);

  const handleComplete = () => {
    sessionStorage.setItem(SESSION_KEY, "1");
    setIsLoading(false);
    setTimeout(() => setIsComplete(true), 600);
    setTimeout(() => setIsRevealed(true), 950);
  };

  return { isLoading, isComplete, isRevealed, handleComplete };
};
