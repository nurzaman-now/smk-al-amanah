"use client";
import { useEffect, useState } from "react";

const TextCarousel = ({ texts, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [texts, interval]);

  return (
    <div className="text-carousel text-lg font-bold">{texts[currentIndex]}</div>
  );
};

export default TextCarousel;
