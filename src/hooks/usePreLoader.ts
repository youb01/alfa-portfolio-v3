import { useState, useEffect } from "react";

export const usePreloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Prevent scroll while loading
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoading]);

  const handleComplete = () => {
    setIsLoading(false);
    // Small delay before marking as complete to ensure smooth transition
    setTimeout(() => {
      setIsComplete(true);
    }, 1000);
  };

  return {
    isLoading,
    isComplete,
    handleComplete,
  };
};
