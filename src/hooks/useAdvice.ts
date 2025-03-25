import { useEffect, useState } from "react";

type Advice = {
  id: number;
  advice: string;
};

export const useAdvice = () => {
  const [advice, setAdvice] = useState<Advice | null>(null);
  const API_URL = "https://api.adviceslip.com/advice";

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setAdvice(data.slip))
      .catch((error) => console.error("Error fetching advice:", error));
  }, [API_URL]);

  const handleClick = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setAdvice(data.slip))
      .catch((error) => console.error("Error fetching advice:", error));
  };

  return { advice, handleClick };
};
