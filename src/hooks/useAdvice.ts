import { useEffect, useState } from "react";

type Advice = {
  id: number;
  advice: string;
};

export const useAdvice = () => {
  const [advice, setAdvice] = useState<Advice | null>(null);
  const [loading, setLoading] = useState(true);
  const API_URL = "https://api.adviceslip.com/advice";

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching advice:", error));
  }, [API_URL]);

  const handleClick = () => {
    setLoading(true);
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching advice:", error));
  };

  return { advice, loading, handleClick };
};
