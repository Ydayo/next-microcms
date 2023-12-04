"use client";
import { MouseEvent, useEffect, useRef, useState } from "react";

export const useScroll = (threshold = 10) => {
  const [scrolled, setScrolled] = useState(false);
  const scrollRef = useRef<HTMLHeadElement | null>(null);
  const handleScroll = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    scrollRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return {
    scrollRef,
    handleScroll,
    scrolled,
  };
};
